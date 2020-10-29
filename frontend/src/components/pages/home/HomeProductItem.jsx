import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const HomeProductItem = ({ product }) => {
  const history = useHistory();

  return (
    <div className='product'>
      <Link to={`/${product._id}`}>
        <div className='product__info'>
          <h2>{product.title}</h2>
          <p className='product__price'>
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <div className='product__rating'>
            <Rating
              name='read-only'
              value={product.rating}
              readOnly
              precision={0.1}
              emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
            <span className='product__numReviews'>({product.numReviews})</span>
          </div>
        </div>
        <img src={product.image} alt={product.title} />
      </Link>
      <button
        className={`button ${product.countInStock > 0 ? '' : 'disable'}`}
        onClick={() =>
          product.countInStock > 0 && history.push(`/cart/${product._id}?qty=1`)
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default HomeProductItem;
