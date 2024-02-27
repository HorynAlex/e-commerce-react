import React from 'react'

const Size = ({prod}) => {

    const renderSizes = () => {
        return prod.sizes.map((size, index) => (
          <button key={index} className='size'>
            <span>{size}</span>
          </button>
        ));
    };

  return (
    <div className='sizes'>
        {renderSizes()}
    </div>
  )
}

export default Size