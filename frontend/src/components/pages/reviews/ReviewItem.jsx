import React from 'react';
import moment from 'moment';

import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const ReviewItem = ({ review }) => {
  return (
    <div className='review'>
      <h5>{review.name}</h5>
      <Rating
        name='read-only'
        value={review.rating}
        readOnly
        precision={0.1}
        emptyIcon={<StarBorderIcon fontSize='inherit' />}
      />
      <h6>{moment(review.createdAt).fromNow()}</h6>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewItem;
