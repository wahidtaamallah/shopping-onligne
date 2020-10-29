import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const PlaceOrderItem = ({ item }) => {
  return (
    <div className='placeOrderItem'>
      <img src={item.image} alt={item.title} />
      <div>
        <Link to={`/${item.product}`}>
          <h5>{item.title}</h5>
        </Link>
        <Rating
          name='read-only'
          value={item.rating}
          readOnly
          precision={0.1}
          emptyIcon={<StarBorderIcon fontSize='inherit' />}
        />
        <div>
          <strong>Qty: </strong> <span>{item.quantity}</span>
        </div>
        <span>
          <small>$</small>
          {item.price * item.quantity}
        </span>
      </div>
    </div>
  );
};

export default PlaceOrderItem;
