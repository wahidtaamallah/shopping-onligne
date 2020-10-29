import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import {
  StarBorderIcon,
  LocalShippingIcon,
  DirectionsRunIcon,
  EmojiEmotionsIcon,
} from 'components/icons';

const ShopeItem = ({ product }) => {
  const history = useHistory();

  return (
    <div className='browseItem'>
      <img src={product.image} alt={product.title} />
      <div>
        <Link to={`/${product._id}`}>
          <h2>{product.title}</h2>
          <div className='browseItem__rating'>
            <Rating
              name='read-only'
              value={product.rating}
              readOnly
              precision={0.1}
              emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
            <span className='browseItem__rating-length'>
              ({product.numReviews})
            </span>
          </div>
          <p className='browseItem__price'>
            $<span>{product.price}</span>
          </p>
          <div className='browseItem__free-shipping'>
            <div>
              <LocalShippingIcon /> <span>Free Shipping Over $100</span>
            </div>
            <div>
              <DirectionsRunIcon /> <span>Fast Delivery</span>
            </div>
            <div>
              <EmojiEmotionsIcon /> <span>15% Tax</span>
            </div>
          </div>
        </Link>
        <button
          className={`button ${product.countInStock > 0 ? '' : 'disable'}`}
          onClick={() =>
            product.countInStock > 0 &&
            history.push(`/cart/${product._id}?qty=1`)
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopeItem;
