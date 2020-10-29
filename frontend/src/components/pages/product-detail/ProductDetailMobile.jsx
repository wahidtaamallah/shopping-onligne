import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';

import {
  StarBorderIcon,
  ShoppingCartIcon,
  PlayArrowIcon,
  ErrorIcon,
} from 'components/icons';

const ProductDetailMobile = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='productDetail__mobile'>
      <div className='productDetail__left-mobile'>
        <h2>{product.title}</h2>
        <div className='productDetail__center-rating mobile'>
          <Rating
            name='read-only'
            value={product.rating}
            readOnly
            precision={0.1}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
          />
          <span className='productDetail__center-rating-length'>
            {product.numReviews} ratings
          </span>
        </div>
        <img src={product.image} alt={product.title} />
        <h3>About this item</h3>
        <p>{product.description}</p>
        <div className='productDetail__center-specs m-0'>
          <p>
            &#8700; Brand: <span>{product.brand}</span>
          </p>
          <p>
            &#8700; Category: <span>{product.category}</span>
          </p>
          <p>
            &#8700; Saler: <span>matan3sh</span>
          </p>
          <p>
            &#8700; Shipes by: <span>Techzon</span>
          </p>
        </div>
      </div>
      <div className='productDetail__right'>
        <h2>${product.price}</h2>
        <h5>No Import Fees Deposit & Free Shipping</h5>
        <p>
          {product.inStock ? (
            <span>In Stock</span>
          ) : (
            <span className='not-inStock'>
              <ErrorIcon />
              Not In Stock
            </span>
          )}
        </p>
        {product.countInStock > 0 && (
          <div className='productDetail__right-qty'>
            Qty:
            <select
              name='quantity'
              id='quantity'
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            >
              {[...Array(product.countInStock)].map((qauntity, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        )}
        <button onClick={() => onAddToCart(quantity)}>
          <ShoppingCartIcon />
          Add to Cart
        </button>
        <button>
          <PlayArrowIcon />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailMobile;
