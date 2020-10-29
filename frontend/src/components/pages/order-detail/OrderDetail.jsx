import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getOrderDetails } from 'store/order/actions';
import { payOrder, payReset } from 'store/paypal/actions';

import { PayPalButton } from 'react-paypal-button-v2';
import { Spinner, Error } from 'components/shared';
import OrderDetailList from './OrderDetailList';
import OrderDetailShipping from './OrderDetailShipping';
import OrderDetailPayment from './OrderDetailPayment';
import OrderDetailSummary from './OrderDetailSummary';

const OrderDetail = ({
  match,
  history,
  user,
  getOrderDetails,
  orderDetails,
  error,
  loading,
  payOrder,
  paySuccess,
  payLoading,
}) => {
  const [sdkReady, setSdkReady] = useState(false);
  const orderId = match.params.id;

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => setSdkReady(true);
      document.body.appendChild(script);
    };
    if (!orderDetails || paySuccess || orderDetails._id !== orderId) {
      payReset();
      getOrderDetails(orderId);
    } else if (!orderDetails.isPaid) {
      if (!window.paypal) addPayPalScript();
      else setSdkReady(true);
    }
    // eslint-disable-next-line
  }, [orderDetails]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    payOrder(orderId, paymentResult);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className='orderDetail'>
          <div className='orderDetail__left'>
            <p
              className='orderDetail_nav'
              onClick={() => history.push('/profile')}
            >
              &#8592; Back to Profile
            </p>
            <h2>CONFIRM ID {orderDetails._id}</h2>
            <div className='orderDetail__left-container'>
              <OrderDetailShipping orderDetails={orderDetails} />
              <OrderDetailPayment orderDetails={orderDetails} />
              {orderDetails.orderItems.length === 0 ? (
                <Error error='Order is empty' />
              ) : (
                <OrderDetailList items={orderDetails?.orderItems} />
              )}
            </div>
          </div>
          <div className='orderDetail__right'>
            <OrderDetailSummary orderDetails={orderDetails} />
            {!orderDetails.isPaid && (
              <>
                {payLoading && <Spinner />}
                {!sdkReady ? (
                  <Spinner />
                ) : (
                  <PayPalButton
                    amount={orderDetails.totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderApp.orderDetails,
  loading: state.orderApp.loading,
  error: state.orderApp.error,
  paySuccess: state.paypalApp.success,
  payLoading: state.paypalApp.loading,
  user: state.userApp.user,
});
const mapDispatchToProps = {
  getOrderDetails,
  payOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
