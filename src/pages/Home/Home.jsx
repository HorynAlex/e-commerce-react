import React, { useRef } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import bg from'../../Assets/img-1/home/home-bg.png'

import brand_1 from '../../Assets/img-1/home/companies/brand-1.png'
import brand_2 from '../../Assets/img-1/home/companies/brand-2.png'
import brand_3 from '../../Assets/img-1/home/companies/brand-3.png'
import brand_4 from '../../Assets/img-1/home/companies/brand-4.png'
import brand_5 from '../../Assets/img-1/home/companies/brand-5.png'

import arrivals_1 from '../../Assets/img-1/products/product-1.png'
import arrivals_2 from '../../Assets/img-1/products/product-2.png'
import arrivals_3 from '../../Assets/img-1/products/product-3.png'
import arrivals_4 from '../../Assets/img-1/products/product-4.png'
import arrivals_5 from '../../Assets/img-1/products/product-5.png'
import arrivals_6 from '../../Assets/img-1/products/product-6.png'
import arrivals_7 from '../../Assets/img-1/products/product-7.png'
import arrivals_8 from '../../Assets/img-1/products/product-8.png'

import star from '../../Assets/img-1/home/icons/Star.png'
import half_star from '../../Assets/img-1/home/icons/half-star.png'

import style_1 from '../../Assets/img-1/home/dresstyle/dres-style-1.png'
import style_2 from '../../Assets/img-1/home/dresstyle/dres-style-2.png'
import style_3 from '../../Assets/img-1/home/dresstyle/dres-style-3.png'
import style_4 from '../../Assets/img-1/home/dresstyle/dres-style-4.png'

import checked from '../../Assets/img-1/home/icons/checked.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const onSale = useRef(null)
  const onAriwals = useRef(null)
  return (
    <>
        <Header sale = {onSale} ariwals={onAriwals}></Header>

        <section className="main">
            <div className="container">
              <div className="left">
                <h1 className="title">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="desc">
                  Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <Link to="/products">
                  <button className="button">
                    <span>Shop Now</span>
                  </button>
                </Link>
                <div className="counter">
                  <div className="box">
                    <h2 className="number">200+</h2>
                    <p className="desc">International Brands</p>
                  </div>
                  <div className="box">
                    <h2 className="number">2,000+</h2>
                    <p className="desc">High-quality Product</p>
                  </div>
                  <div className="box">
                    <h2 className="number">30,000+</h2>
                    <p className="desc">Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="main-img">
                  <img src={bg} alt="background" />
                </div>
              </div>
            </div>
        </section>

        <section className="companies">
          <div className="container">
            <div className="brand">
              <img src={brand_1} alt="" />
            </div>
            <div className="brand">
              <img src={brand_2} alt="" />
            </div>
            <div className="brand">
              <img src={brand_3} alt="" />
            </div>
            <div className="brand">
              <img src={brand_4} alt="" />
            </div>
            <div className="brand">
              <img src={brand_5} alt="" />
            </div>
          </div>
        </section>

        <section className="clothes" ref={onAriwals}>
          <div className="container">
            <div className="arrivals">
              <h1 className="title">New Arriwals</h1>
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
                    <img src={arrivals_2} alt="" />
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
                        <img src={half_star} alt="" />
                      </div>
                    </div>
                    <p>3.5/<span>5</span></p>
                  </div>
                  <h3 className="price">$120</h3>
                </div>

                <div className="box">
                  <div className="img-box">
                    <img src={arrivals_3} alt="" />
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
                    <img src={arrivals_4} alt="" />
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
              <Link to="/products" className="view_all">
                <span>View All</span>
              </Link>
            </div>
            <div className="selling" ref={onSale}>
              <h1 className="title">Top Selling</h1>
              <div className="box-container">
                <div className="box">
                  <div className="img-box">
                    <img src={arrivals_5} alt="" />
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
                    <img src={arrivals_6} alt="" />
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
                          <img src={half_star} alt="" />
                        </div>
                    </div>
                    <p>3.5/<span>5</span></p>
                  </div>
                  <h3 className="price">$120</h3>
                </div>

                <div className="box">
                  <div className="img-box">
                    <img src={arrivals_7} alt="" />
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
                    <img src={arrivals_8} alt="" />
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
              <Link to="/products" className="view_all">
                <span>View All</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="style">
          <div className="container">
            <h1 className="title">Browse by dress style</h1>
            <div className="colums">
              <div className="col">
                <div className="row">
                  <h3 className="text">Casual</h3>
                  <div className="img-box">
                    <img src={style_1} alt="" />
                  </div>
                </div>
                <div className="row">
                  <h3 className="text">Formal</h3>
                  <div className="img-box">
                    <img src={style_2} alt="" />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="row">
                  <h3 className="text">Party</h3>
                  <div className="img-box">
                    <img src={style_3} alt="" />
                  </div>
                </div>
                <div className="row">
                  <h3 className="text">Gym</h3>
                  <div className="img-box">
                    <img src={style_4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="customers">
          <div className="container">
            <h1 className="title">Our Happy Customers</h1>
            <div className="slider">
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
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
    </>
  )
}

export default Home