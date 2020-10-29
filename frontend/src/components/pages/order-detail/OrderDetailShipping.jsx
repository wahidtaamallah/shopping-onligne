import React from 'react';
import moment from 'moment';

import { Success, Error } from 'components/shared';

const OrderDetailShipping = ({ orderDetails }) => {
  return (
    <>
      <h3>SHIPPING</h3>
      <div className='orderDetail__left-container-specs'>
        <p>
          Name: <span>{orderDetails?.user?.name}</span>
        </p>
        <p>
          Email:
          <a href={`${orderDetails?.user?.email}`}>
            {orderDetails?.user?.email}
          </a>
        </p>
        <p>
          Address:
          <span>
            {orderDetails?.shippingAddress?.address}{' '}
            {orderDetails?.shippingAddress?.city}{' '}
            {orderDetails?.shippingAddress?.postalCode},{' '}
            {orderDetails?.shippingAddress?.country}
          </span>
        </p>
        {orderDetails?.isDelivered ? (
          <Success
            msg={`Delivered on ${moment(orderDetails?.deliveredAt).format(
              'LL'
            )}`}
          />
        ) : (
          <Error error='Not Delivered' />
        )}
      </div>
    </>
  );
};

export default OrderDetailShipping;
