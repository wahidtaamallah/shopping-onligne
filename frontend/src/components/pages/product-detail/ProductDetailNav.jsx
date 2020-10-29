import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailNav = () => {
  return (
    <div className='productDetail__nav'>
      <h5>
        <Link to='/browse'>
          <span>Browse</span>
        </Link>
        <small>&#8702;</small> <span>Product</span>
      </h5>
    </div>
  );
};

export default ProductDetailNav;
