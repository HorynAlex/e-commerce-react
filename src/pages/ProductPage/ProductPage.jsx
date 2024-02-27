import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';

import './ProductPage.css'

import product from '../../data/product.json'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import star from '../../Assets/img-1/home/icons/Star.png'
import half_star from '../../Assets/img-1/home/icons/half-star.png'

import choosed from '../../Assets/img-1/choosed.png'

import checked from '../../Assets/img-1/home/icons/checked.png'

import arrivals_1 from '../../Assets/img-1/products/product-1.png'
import ListStars from '../../components/Stars/ListStars';
import {useCartContext} from '../../context/CartContext';

const ProductPage = () => {
  //current page
  // console.log(useParams())
  const {id} = useParams();
  const { helo, addCart, increment, decrement, itemAmount, amount } = useCartContext();

  const prod = product.find(item=> item.id === parseInt(id));
  //destructure product
  const {title, desc, main_img, sub_img, sizes, price, colors} = prod
  const [size, setSize] = useState(sizes[0])
  const [active, setActive] = useState(colors[0])
  const[changes, setChanges] = useState(0)

  // Перевірка на undefined
  if (!prod) {
    return <p>Product not found</p>;
  }
  
  //image changer
  const changeImages = (index) => {
    setChanges(index)
  }
  const nextImage = () => {
    setChanges((prevIndex) => (prevIndex + 1) % sub_img.length)
  }
  const prevImage = () => {
    setChanges((prevIndex) => (prevIndex - 1 + sub_img.length) % sub_img.length)
  }
  const imageURL = sub_img[changes]
  
  return (
    <>
      <Header></Header>

      <section className="details">
      <div className="container">
          <div className="left">
            <div className="sub_imgs">
              {
                sub_img.map((image, index) => {
                  return (
                    <div className="sub">
                      <img 
                        src={image} 
                        alt="" 
                        key={index} 
                        onClick={() => changeImages(index)}
                      />
                    </div>
                  )
                })
              }
            </div>
            <div className="main_img" style={{background: active}}>
              <img src={imageURL} alt="" />
            </div>
          </div>
          <div className="right">
            <h1 className="title">
              {title}
            </h1>
            <div className="box">
              <div className="rating">
                <ListStars prod={prod}></ListStars>
                <p>3.5/<span>5</span></p>
              </div>
              <h3 className="price">${price}</h3>
              <p className="desc">
                {desc}
              </p>
            </div>

            <div className="box">
              <p className="desc">Select Colors</p>
              <div className="colors">
                {
                  colors.map((color) =>{
                    return(
                      <div 
                        className={`${active === color ? "color active" : 'color'}`} 
                        style={{background:color}} 
                        onClick={() => setActive(color)}
                      >
                        <img src={choosed} alt="" />
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="box">
              <div className="sizes">
              {
                  sizes.map((sizez) =>{
                    return(
                      <button className={`${size === sizez ? "size active" : 'size'}`} onClick={() => setSize(sizez)}>
                        <span>{sizez}</span>
                      </button>
                    )
                  })
                }
              </div>
            </div>

            <div className="bying">
              <div className="row">
                <button className="add-cart" onClick={() => addCart(prod, prod.id)}>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="tabs">
        <div className="container">
          <div className="tabs_list">
            <a className="tab_item">
              <h4 className="name">
                Product Details
              </h4>
            </a>

            <a className="tab_item active">
              <h4 className="name">
                Rating & Reviews
              </h4>
            </a>

            <a className="tab_item">
              <h4 className="name">
                FAQs
              </h4>
            </a>
          </div>
          <div className="details">
            <h2 className="title">All Reviews <span>(451)</span></h2>
            <div className="filters">
              <select>
                <option value="">Most Popular</option>
                <option value="">Low Price</option>
                <option value="">High Price</option>
                <option value="">All</option>
              </select>
              <button className="button-filter">
                <span>Write a Review</span>
              </button>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="stars">
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
              </div>
              <div className="author">
                <div className="checked">
                  <h3 className="name">Sartah M.</h3>
                  <div className="img-box">
                    <img src={checked} alt="" />
                  </div>
                </div>
                <p className="desc">
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                </p>
              </div>
              <div className="data-posted">
                <p>Posted on August 14, 2023</p>
              </div>
            </div>

            <div className="box">
              <div className="stars">
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
              </div>
              <div className="author">
                <div className="checked">
                  <h3 className="name">Sartah M.</h3>
                  <div className="img-box">
                    <img src={checked} alt="" />
                  </div>
                </div>
                <p className="desc">
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                </p>
              </div>
              <div className="data-posted">
                <p>Posted on August 14, 2023</p>
              </div>
            </div>

            <div className="box">
              <div className="stars">
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
                <div className="star">
                  <img src={star} alt="" />
                </div>
              </div>
              <div className="author">
                <div className="checked">
                  <h3 className="name">Sartah M.</h3>
                  <div className="img-box">
                    <img src={checked} alt="" />
                  </div>
                </div>
                <p className="desc">
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                </p>
              </div>
              <div className="data-posted">
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
          </div>
          <button className="button">
            <span>Load More Reviews</span>
          </button>
        </div>
      </section>

      <section className="also_like">
        <div className="container">
          <h1 className="title">You might also like</h1>
          <div className="box-container">
            <div className="box">
              <div className="img-box">
                <img src={arrivals_1} alt="" />
              </div>
              <h3 className="name">T-shirt with Tape Details</h3>
              <div className="rating">
                <div className="stars">
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={half_star} alt="" />
                  </div>
                </div>
                <p>4.5/<span>5</span></p>
              </div>
              <h3 className="price">$120</h3>
            </div>

            <div className="box">
              <div className="img-box">
                <img src={arrivals_1} alt="" />
              </div>
              <h3 className="name">T-shirt with Tape Details</h3>
              <div className="rating">
                <div className="stars">
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={half_star} alt="" />
                  </div>
                </div>
                <p>4.5/<span>5</span></p>
              </div>
              <h3 className="price">$120</h3>
            </div>

            <div className="box">
              <div className="img-box">
                <img src={arrivals_1} alt="" />
              </div>
              <h3 className="name">T-shirt with Tape Details</h3>
              <div className="rating">
                <div className="stars">
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={half_star} alt="" />
                  </div>
                </div>
                <p>4.5/<span>5</span></p>
              </div>
              <h3 className="price">$120</h3>
            </div>

            <div className="box">
              <div className="img-box">
                <img src={arrivals_1} alt="" />
              </div>
              <h3 className="name">T-shirt with Tape Details</h3>
              <div className="rating">
                <div className="stars">
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={star} alt="" />
                  </div>
                  <div className="star">
                    <img src={half_star} alt="" />
                  </div>
                </div>
                <p>4.5/<span>5</span></p>
              </div>
              <h3 className="price">$120</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default ProductPage