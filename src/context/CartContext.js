import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(cartFromLocalStorage)
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)
    // const contextValue = { helo: "hello bitch" }

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    //subtotal
    useEffect(()=>{
        const subtotal = cart.reduce((accumulator,currentItem)=>{
            return accumulator + currentItem.price * currentItem.amount;
        },0)
        setSubtotal(subtotal)
    })

    //discount
    useEffect(()=>{
        const discount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.discount * currentItem.amount
        }, 0)
        setDiscount(discount)
    })

    //total
    useEffect(()=>{
        const total = cart.reduce((accumulator, currentItem) =>{
            return accumulator + currentItem.price * currentItem.amount - currentItem.discount * currentItem.amount + 15;
        }, 0)
        setTotal(total)
    })

    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0)
            setItemAmount(amount)
            console.log(amount)
        }
    },[cart])

    const addCart = (prod, id) => {
        //create new object "newItem", witch act a new product with 1 amount 
        const newItem = {...prod, amount: 1}
        console.log(newItem)

        //check if the item is already in the cart
        const cartItem = cart.filter(item=> {
            return item.id === id;
        })
        console.log(cartItem)

        //if cart is already in the cart
        if(cartItem.length > 0){
            //Create new array newCart, who been a copy of current array cart(for help spread operation)
            // and update counts of product, if "id" product is exist in cart
            const newCart = [...cart].map(item =>{
                if(item.id === id){
                    return{...item, amount: item.amount + 1}
                } else{
                    return item;
                }
            })
            //setting new state cart for help setCart
            setCart(newCart)
        } else{
            //if product doesn't in cart, so we added a new object in cart
            setCart([...cart, newItem])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removItem = (id) => {
        const newCart = cart.filter(item=>{
            return item.id !== id;
        })
        setCart(newCart)
    }

    const increment = (id) => {
        const cartItem = cart.find(item => item.id === id);
        addCart(cartItem, id)
    }

    const decrement = (id) => {
        const cartItem = cart.find(item=>{
            return item.id === id;
        })
        if(cartItem){
            const newCart = cart.map(item => {
                if(item.id === id){
                    return {...item, amount: cartItem.amount - 1};
                } else{
                    return item
                }
            });
            setCart(newCart)
        }

        if(cartItem.amount < 2){
            removItem(id)
        }
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{ cart, addCart, removItem, clearCart, increment, decrement, total, subtotal, discount, itemAmount}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}