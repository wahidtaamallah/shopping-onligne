import React from 'react';

const OrderDetailItem = ({ item }) => {
  return (
    <div className='orderDetail__left-item'>
      <img src={item.image} alt={item.title} />
      <div>
        <h5>{item.title}</h5>
        <h6>Quantity: {item.quantity}</h6>
      </div>
      <h5>
        {item.quantity} x ${item.price} = ${item.quantity * item.price}
      </h5>
    </div>
  );
};

export default OrderDetailItem;
