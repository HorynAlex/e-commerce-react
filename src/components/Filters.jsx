import React, { useState } from 'react'
import product from '../data/product.json'

const Filters = ({filters, handleFilterChange}) => {

  return (
    <aside className='filter'>
            <h3 className="title">Filters</h3>
            <div className="shirts">
              {/* <label htmlFor="">
                <input type="checkbox" checked={filters.type === "T_shirts"} onChange={() => handleFilterChange('type', 'T_shirts')}/>
                T-shirt
              </label>

              <label htmlFor="">
                <input type="checkbox"  checked={filters.type === "Jeans"} onChange={() => handleFilterChange('type', 'Jeans')}/>
                Jeans
              </label> */}
              <button className={filters.type === null ? 'shirt active' : 'shirt'} type='button' checked={filters.type === "T_shirts"} onClick={() => handleFilterChange('type', null)}>
                <span>All</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                </svg>
              </button>
              <button className={filters.type === "T_shirts" ? 'shirt active' : 'shirt'} type='button' checked={filters.type === "T_shirts"} onClick={() => handleFilterChange('type', 'T_shirts')}>
                <span>T-shirts</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                </svg>
              </button>
              <button className={filters.type === "hoody" ? 'shirt active' : 'shirt'} type='button' checked={filters.type === "hoody"} onClick={() => handleFilterChange('type', 'hoody')}>
                <span>Hoody</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                </svg>
              </button>
              <button className={filters.type === "shorts" ? 'shirt active' : 'shirt'} type='button' checked={filters.type === "shorts"} onClick={() => handleFilterChange('type', 'shorts')}>
                <span>Shors</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                </svg>
              </button>
              <button className={filters.type === "Jeans" ? 'shirt active' : 'shirt'} type='button' checked={filters.type === "Jeans"} onClick={() => handleFilterChange('type', 'Jeans')}>
                <span>Jeans</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                </svg>
              </button>
            </div>
            <div className="color-selector">
              <h3 className="title">Colors</h3>
              <div className="color-box">
                <div className="row">
                  <div className={filters.color_selected === null ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#00C12B"} onClick={() => handleFilterChange('color_selected', null)}>
                    <span>All</span>
                  </div>

                  <div className={filters.color_selected === "#00C12B" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#00C12B"} onClick={() => handleFilterChange('color_selected', '#00C12B')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#F50606" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#F50606"} onClick={() => handleFilterChange('color_selected', '#F50606')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#F5DD06" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#F5DD06"} onClick={() => handleFilterChange('color_selected', '#F5DD06')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#F57906" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#F57906"} onClick={() => handleFilterChange('color_selected', '#F57906')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#06CAF5" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#06CAF5"} onClick={() => handleFilterChange('color_selected', '#06CAF5')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#063AF5" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#063AF5"} onClick={() => handleFilterChange('color_selected', '#063AF5')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#7D06F5" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#7D06F5"} onClick={() => handleFilterChange('color_selected', '#7D06F5')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#F506A4" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#F506A4"} onClick={() => handleFilterChange('color_selected', '#F506A4')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#FFFFFF" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#FFFFFF"} onClick={() => handleFilterChange('color_selected', '#FFFFFF')}>
                    <img className='check' src="" alt="" />
                  </div>

                  <div className={filters.color_selected === "#000000" ? 'color active' : 'color'} type='button' checked={filters.color_selected === "#000000"} onClick={() => handleFilterChange('color_selected', '#000000')}>
                    <img className='check' src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sizes">
              <h3 className="title">Size</h3>
              <div className="size-selector">
                <button className={filters.size_selected === null ? 'size active' : 'size'} type='button' checked={filters.size_selected === "XX-Large"} onClick={() => handleFilterChange('size_selected', null)}>
                  <span>All</span>
                </button>
                <button className={filters.size_selected === "3X-Large" ? 'size active' : 'size'} type='button' checked={filters.size_selected === "3X-Large"} onClick={() => handleFilterChange('size_selected', "3X-Large")}>
                  <span>3X-Large</span>
                </button>
                <button className={filters.size_selected === "XX-Large" ? 'size active' : 'size'} type='button' checked={filters.size_selected === "XX-Large"} onClick={() => handleFilterChange('size_selected', "XX-Large")}>
                  <span>XX-Large</span>
                </button>
                <button className={filters.size_selected === "X-Large" ? 'size active' : 'size'} type='button' checked={filters.size_selected === "X-Large"} onClick={() => handleFilterChange('size_selected', "X-Large")}>
                  <span>X-Large</span>
                </button>
                <button className={filters.size_selected === "Large" ? 'size active' : 'size'} type='button' checked={filters.size_selected === "Large"} onClick={() => handleFilterChange('size_selected', "Large")}>
                  <span>Large</span>
                </button>
                <button className={filters.size_selected === "Medium" ? 'size active' : 'size'} type='button' checked={filters.size_selected === "Medium"} onClick={() => handleFilterChange('size_selected', "Medium")}>
                  <span>Medium</span>
                </button>
                <button className={filters.size_selected === "Small" ? 'size active' : 'size'} type='button' checked={filters.size_selected === "Small"} onClick={() => handleFilterChange('size_selected', "Small")}>
                  <span>Small</span>
                </button>   
                <button className={filters.size_selected === "X-Small" ? 'size active' : 'size'} type='button' checked={filters.size_selected === "X-Small"} onClick={() => handleFilterChange('size_selected', "X-Small")}>
                  <span>X-Small</span>
                </button>  
              </div>
            </div>
            <div className="dress-style">
              <h3 className="title">Dress Style</h3>

              <div className="dreses">
                <button className="dres">
                  <span>Casual</span>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                  </svg>
                </button>

                <button className="dres">
                  <span>Formal</span>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                  </svg>
                </button>

                <button className="dres">
                  <span>Party</span>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                  </svg>
                </button>

                <button className="dres">
                  <span>Gym</span>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z" fill="black" fill-opacity="0.6"/>
                  </svg>
                </button>
              </div>
            </div>
          </aside>
  )
}

export default Filters