import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from 'store/cart/actions';

import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const CheckoutPreview = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className='checkoutProduct'>
      <img src={item.image} alt={item.title} />
      <div className='checkoutProduct__info'>
        <Link to={`/${item.product}`}>
          <p className='checkoutProduct__title'>{item.title}</p>
        </Link>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          <Rating
            name='read-only'
            value={item.rating}
            readOnly
            precision={0.1}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
          />
        </div>
        <div className='checkoutProduct__footer'>
          <div className='productDetail__right-qty'>
            Qty:
            <select
              name='quantity'
              id='quantity'
              onChange={(e) => addToCart(item.product, e.target.value)}
              value={item.quantity}
            >
              {[...Array(item.countInStock)].map((qauntity, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <span className='spred'>|</span>
          <span onClick={() => removeFromCart(item.product)}>Delete</span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(null, mapDispatchToProps)(CheckoutPreview);
