import React, { useState } from 'react';
import { connect } from 'react-redux';
import { savePaymentMethod } from 'store/cart/actions';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import CheckoutSteps from '../shipping/CheckoutSteps';

const Payment = ({ history, savePaymentMethod, shippingAddress }) => {
  if (!shippingAddress) history.push('/shipping');

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const onSubmit = (e) => {
    e.preventDefault();
    savePaymentMethod(paymentMethod);
    history.push('/placeorder');
  };

  return (
    <div className='shipping'>
      <div className='shipping__container'>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment</h1>
        <form onSubmit={onSubmit}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Select Method</FormLabel>
            <RadioGroup
              aria-label='paymentMethod'
              name='paymentMethod'
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value='PayPal'
                control={<Radio />}
                label='PayPal or Credit Card'
              />
              <FormControlLabel
                value='Stripe'
                disabled
                control={<Radio />}
                label='Stripe'
              />
            </RadioGroup>
          </FormControl>
          <button type='submit' className='auth__signInButton'>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shippingAddress: state.cartApp.shippingAddress,
});

const mapDispatchToProps = {
  savePaymentMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
