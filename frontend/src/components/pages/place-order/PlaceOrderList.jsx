import React from 'react';
import PlaceOrderItem from './PlaceOrderItem';
const PlaceOrderList = ({ cartItems }) => {
  return (
    <div className='placeOrderList'>
      {cartItems.map((item, index) => (
        <PlaceOrderItem item={item} key={index} />
      ))}
    </div>
  );
};

export default PlaceOrderList;
