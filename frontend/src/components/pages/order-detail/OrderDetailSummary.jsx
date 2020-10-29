import React from 'react';

const OrderDetailSummary = ({ orderDetails }) => {
  const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

  const itemsPrice = addDecimals(
    orderDetails?.orderItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )
  );
  return (
    <div className='orderDetail__right-container'>
      <h3>SUMMARY</h3>
      <div className='orderDetail__left-container-specs b-bottom total'>
        <p>
          Products: <span>${itemsPrice}</span>
        </p>
        <p>
          Shipping: <span>${orderDetails?.shippingPrice}</span>
        </p>
        <p>
          Tax: <span>${orderDetails?.taxPrice}</span>
        </p>
        <p>
          Total: <span>${orderDetails?.totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetailSummary;
