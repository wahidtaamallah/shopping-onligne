import axios from 'axios';
const PATH = '/api/products';

export const addReview = (productId, review) => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    dispatch({ type: 'PRODUCT_ADD_REVIEW_REQUEST' });
    await axios.post(`${PATH}/${productId}/reviews`, review, config);
    dispatch({ type: 'PRODUCT_ADD_REVIEW_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_ADD_REVIEW_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetAddReview = () => (dispatch) => {
  dispatch({ type: 'PRODUCT_ADD_REVIEW_RESET' });
};
