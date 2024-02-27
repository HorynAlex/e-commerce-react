import React, { useState } from 'react'
import './Products.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import product from '../../data/product.json'
import ListStars from '../../components/Stars/ListStars'
import { Link } from 'react-router-dom'
import Filters from '../../components/Filters'

const Products = () => {
  const [items, setItems] = useState(product)

  const [filters, setFilters] = useState({
    //Отже, цей стан filters має за мету зберігати вибрані значення для різних фільтрів, таких як тип, колір, стиль і розмір. Ці значення можуть використовуватися в компоненті для фільтрації відображуваних продуктів відповідно до вибору користувача.
    type: null,
    color_selected: null,
    style_selected:null,
    size_selected: null,
  });

  const handleFilterChange = (filterType, value) => {
    //filterType - вказує на тип фільтра який змінюється(напр "color", "type", "size_selected"). value - представляє нове значення яке обрано для цього фільтра.
    setFilters(prevFilter => ({//prevFilter: Це параметр, який представляє попередній (поточний) стан об'єкта фільтрів.
        // Це вираз, який створює новий об'єкт, копіюючи попередній стан фільтрів (...prevFilter) і змінюючи значення для конкретного фільтра ([filterType]) на нове значення (value).
      ...prevFilter,//Цей фрагмент використовує оператор spread (...), щоб створити копію попереднього об'єкта фільтрів. Застосування цього оператора дозволяє зберегти всі існуючі фільтри без їхнього змінення.
      [filterType]: value,//Цей фрагмент додає або оновлює властивість об'єкта, яка визначається filterType, і присвоює їй значення value. В інших словах, це змінює вибране значення конкретного фільтра на нове значення.
    }));
    
  };

  // console.log(filters)

  const filteredProducts = items.filter(item => {
    
    if(filters.type && item.type !== filters.type){
      return false;
    }

    if(filters.color_selected && item.color_selected.includes(filters.color_selected)){
      return false;
    }

    if(filters.style_selected && item.style_selected !== filters.style_selected){
      return false;
    }

    if(filters.size_selected && !item.size_selected.includes(filters.size_selected)){
      return false;
    }

    return true;
  })
  // console.log(filteredProducts)

  return (
    <>
      <Header></Header>

      <section className='products'>
        <div className="container">
          <Filters filters={filters} handleFilterChange={handleFilterChange}></Filters>
  
          <div className="main_products">
            <div className="top">
              <h1 className="title">Casual</h1>
              <div className="selectors">
                <p>Showing 1-10 of 100 Products</p>
                <div className="box">
                  <span>Sort by:</span>
                  <select name="" id="">
                    <option value="">Most Popular</option>
                    <option value="">Low Price</option>
                    <option value="">High Price</option>
                    <option value="">All</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="products_items">
              {
                filteredProducts.map((prod) => (
                  <Link to={`/products/${prod.id}`}>
                    <div key={prod.id} className="product">
                      <div className="img-box">
                        <img src={prod.main_img} alt="" />
                      </div>
                      <h3 className="name">{prod.title}</h3>
                      <div className="rating">
                        <ListStars prod={prod}></ListStars>
                        <p>{prod.half_rate}/<span>5</span></p>
                      </div>
                      <h3 className="price">${prod.price}</h3>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default Products