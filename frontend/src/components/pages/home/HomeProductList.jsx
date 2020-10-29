import React from 'react';

import HomeProductItem from './HomeProductItem';

const HomeProductList = ({ products }) => {
  return (
    <div className='product__home'>
      {products?.map((product, index) => (
        <HomeProductItem product={product} key={index} />
      ))}
    </div>
  );
};

export default HomeProductList;
