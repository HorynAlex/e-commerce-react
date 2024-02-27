import React from 'react'
import '../../pages/Products/Products.css'

const ListStars = ({prod}) => {

    const renderRates = () => {
        return prod.rates.map((rate, index) => (
          <img key={index} src={rate} alt={`Star ${index + 1}`} />
        ));
      };
    
      return (
        <div className='stars'>
          <div className='star'>{renderRates()}</div>
        </div>
      );
}

export default ListStars