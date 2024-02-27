import React, { useEffect } from 'react'
import './Cart.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import arrivals_1 from '../../Assets/img-1/products/product-1.png'
import arrow_right from '../../Assets/img-1/arrow-right.png'
import { useCartContext } from '../../context/CartContext'
import CartProduct from '../../components/CartProduct/CartProduct'

const Cart = () => {

  const {cart, total, subtotal, discount, clearCart} = useCartContext()

  return (
    <>
      <Header></Header>

      <section className="cart">
        <div className="container">
          <h1 className="title">Your Cart</h1>
          <div className="box-container">
            <div className="left">
              {
                cart.map(item => {
                  return <CartProduct item={item} key={item.id}></CartProduct>
                })
              }
            </div>
            <div className="right">
              <div className="order">
                <div className="title">Order Summary</div>
                <div className="top">
                  <div className="row">
                    <p className="title">Subtotal</p>
                    <span className="price">${subtotal}</span>
                  </div>
                  <div className="row">
                    <p className="title">Discount (-20%)</p>
                    <span className="price">-${discount}</span>
                  </div>
                  <div className="row">
                    <p className="title">Deliver Free</p>
                    <span className="price">$15</span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="row">
                    <p className="title">Total</p>
                    <span className="price">${total}</span>
                  </div>
                  <div className="promo">
                    <div className="input-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.0766 12.4857L13.7653 3.17444C13.5917 2.9997 13.3851 2.86115 13.1576 2.76685C12.93 2.67254 12.686 2.62435 12.4397 2.62507H3.75001C3.45164 2.62507 3.16549 2.7436 2.95451 2.95457C2.74353 3.16555 2.62501 3.4517 2.62501 3.75007V12.4398C2.62429 12.6861 2.67248 12.9301 2.76679 13.1576C2.86109 13.3852 2.99963 13.5918 3.17438 13.7654L12.4856 23.0766C12.8372 23.4281 13.3141 23.6256 13.8113 23.6256C14.3084 23.6256 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3085 23.6255 13.8113C23.6255 13.3141 23.4281 12.8373 23.0766 12.4857ZM13.8113 21.2204L4.87501 12.2813V4.87507H12.2813L21.2175 13.8113L13.8113 21.2204ZM9.37501 7.87507C9.37501 8.17174 9.28703 8.46175 9.12221 8.70842C8.95739 8.9551 8.72312 9.14736 8.44903 9.26089C8.17494 9.37442 7.87334 9.40412 7.58237 9.34625C7.2914 9.28837 7.02413 9.14551 6.81435 8.93573C6.60457 8.72595 6.46171 8.45868 6.40383 8.1677C6.34595 7.87673 6.37566 7.57513 6.48919 7.30104C6.60272 7.02695 6.79498 6.79269 7.04165 6.62786C7.28833 6.46304 7.57834 6.37507 7.87501 6.37507C8.27283 6.37507 8.65436 6.5331 8.93567 6.81441C9.21697 7.09571 9.37501 7.47724 9.37501 7.87507Z" fill="black" fill-opacity="0.4"/>
                    </svg>
                      <input type="text" placeholder='Add promo code'/>
                    </div>
                    <button className="button">
                      <span>Apply</span>
                    </button>
                  </div>
                </div>
                <button className="checkout" onClick={() => clearCart()}>
                  <span>Go to Checkout</span>
                  <div className="img-box">
                    <img src={arrow_right} alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default Cart