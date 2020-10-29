import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from 'store/cart/actions';

import CheckoutList from './CheckoutList';
import Subtotal from './Subtotal';

const Checkout = ({ match, location, cartItems, history, addToCart }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productId) {
      addToCart(productId, qty);
      history.replace('/cart');
    }
  }, [productId, qty, addToCart, history]);

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='amazon-ad'
          className='checkout__ad'
        />
        {!cartItems?.length ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in yout basket. To buy one or more items, click
              "Add to basket" net to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            <CheckoutList basket={cartItems} />
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className='checkout__right'>
          <Subtotal basket={cartItems} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartApp.cartItems,
});
const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
