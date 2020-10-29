import React from 'react';

import OrderDetailItem from './OrderDetailItem';

const OrderDetailList = ({ items }) => {
  return (
    <>
      <h3>PRODUCTS</h3>
      <div className='orderDetail__left-container-specs b-bottom'>
        {items.map((item, index) => (
          <OrderDetailItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default OrderDetailList;
