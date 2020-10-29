import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const ProductDetailCenter = ({ product }) => {
  return (
    <div className='productDetail__center'>
      <h2>{product.title}</h2>
      <div className='productDetail__center-rating'>
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

      <h3>Description</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailCenter;
