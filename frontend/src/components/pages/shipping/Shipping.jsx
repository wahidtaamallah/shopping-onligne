import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveShippongAddress } from 'store/cart/actions';

import CheckoutSteps from './CheckoutSteps';

const Shipping = ({ history, saveShippongAddress, shippingAddress }) => {
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const onSubmit = (e) => {
    e.preventDefault();
    saveShippongAddress({ address, city, postalCode, country });
    history.push('/payment');
  };

  return (
    <div className='shipping'>
      <div className='shipping__container'>
        <CheckoutSteps step1 step2 />
        <h1>Shipping Details</h1>
        <form onSubmit={onSubmit}>
          <h5>Address</h5>
          <input
            name='address'
            type='text'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <h5>City</h5>
          <input
            name='city'
            type='text'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <h5>Postal Code</h5>
          <input
            name='postalCode'
            type='text'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <h5>Country</h5>
          <input
            name='country'
            type='text'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
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
  saveShippongAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
