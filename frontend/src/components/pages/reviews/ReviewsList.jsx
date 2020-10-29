import React, { useState } from 'react';
import { connect } from 'react-redux';

import ReviewAddModal from './ReviewAddModal';
import ReviewItem from './ReviewItem';
import { Success, Info, Error, Spinner } from 'components/shared';

import IconButton from '@material-ui/core/IconButton';
import { StarIcon, AddCommentIcon } from 'components/icons';

const ReviewsList = ({ product, success, user, error, loading }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <ReviewAddModal open={open} onClose={onClose} productId={product?._id} />
      <div className='reviews'>
        <div className='reviews__header'>
          {user ? (
            <>
              <IconButton
                onClick={onOpen}
                color='default'
                aria-label='add review'
                component='span'
              >
                <AddCommentIcon />
              </IconButton>
              <h2>Reviews</h2>
              <div className='product__reviewRating'>
                <StarIcon /> <span>{product?.rating?.toFixed(1)}</span>
              </div>
            </>
          ) : (
            <Error error='Only signin users can send a review' />
          )}
        </div>
        {success && <Success msg='Review successfully added' />}
        {error && <Error error={error} />}
        {loading && <Spinner />}
        {product?.reviews?.length === 0 ? (
          <Info msg='No reviews yet.' />
        ) : (
          <div className='reviews__list'>
            {product?.reviews?.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  success: state.reviewAddApp.success,
  error: state.reviewAddApp.error,
  loading: state.reviewAddApp.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
