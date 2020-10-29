import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReview } from 'store/review-add/actions';

import Rating from '@material-ui/lab/Rating';
import { Modal } from 'react-responsive-modal';

const ReviewAddModal = ({ open, onClose, user, addReview, productId }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addReview(productId, {
      name: user.name,
      rating,
      comment,
      user: user._id,
    });
    onClose();
  };

  return (
    <Modal focusTrapped={false} open={open} onClose={() => onClose()} center>
      <div className='modal__header'>
        <h2>Add Review</h2>
      </div>
      <div className='modal__body'>
        <form onSubmit={onSubmit}>
          <div className='add__review-top'>
            <label>Choose Your Rate</label>
            <Rating
              precision={0.1}
              name='rental-rate'
              className='reviews__card-icon'
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
          <div className='inputs'>
            <div className='input'>
              <input
                type='text'
                placeholder='Name'
                value={user?.name}
                readOnly
              />
            </div>
            <div className='input'>
              <textarea
                rows='8'
                type='text'
                placeholder='Write your review'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <button
            className={`button ${comment === '' && 'disable'}`}
            disabled={comment === ''}
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
});

const mapDispatchToProps = {
  addReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAddModal);
