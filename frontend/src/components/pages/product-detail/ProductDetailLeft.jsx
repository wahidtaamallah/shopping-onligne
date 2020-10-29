import React from 'react';

const ProductDetailLeft = ({ product }) => {
  return (
    <div className='productDetail__left'>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductDetailLeft;
