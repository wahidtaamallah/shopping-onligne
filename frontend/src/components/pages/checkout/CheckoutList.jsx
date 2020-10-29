import React from 'react';
import CheckoutItem from './CheckoutItem';

const CheckoutList = ({ basket }) => {
  return (
    <div>
      {basket.map((item, index) => (
        <CheckoutItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CheckoutList;
