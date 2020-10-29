import React, { useState } from 'react';
import { ShoppingCartIcon, PlayArrowIcon, ErrorIcon } from 'components/icons';

const ProductDetailRight = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='productDetail__right'>
      <h2>${product.price}</h2>
      <h5>No Import Fees Deposit & U.S Free Shipping</h5>
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
      <button
        className={`${!product.inStock && 'disable'}`}
        onClick={() => product.inStock && onAddToCart(quantity)}
      >
        <ShoppingCartIcon />
        Add to Cart
      </button>
      <button className={`${!product.inStock && 'disable'}`}>
        <PlayArrowIcon />
        Buy Now
      </button>
      <div className='productDetail__center-specs'>
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
  );
};

export default ProductDetailRight;
