import React from 'react';
import moment from 'moment';
import { Success, Error } from 'components/shared';

const OrderDetailPayment = ({ orderDetails }) => {
  return (
    <>
      <h3>PAYMENT METHOD</h3>
      <div className='orderDetail__left-container-specs'>
        <p>
          Method: <span>{orderDetails?.paymentMethod}</span>
        </p>
        {orderDetails.isPaid ? (
          <Success
            msg={`Paid on ${moment(orderDetails.paidAt).format('LL')}`}
          />
        ) : (
          <Error error='Not Paid' />
        )}
      </div>
    </>
  );
};

export default OrderDetailPayment;
