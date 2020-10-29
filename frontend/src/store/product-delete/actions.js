import axios from 'axios';
const PATH = '/api/products';

export const deleteProduct = (id) => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    dispatch({ type: 'PRODUCT_DELETE_REQUEST' });
    await axios.delete(`${PATH}/${id}`, config);
    dispatch({ type: 'PRODUCT_DELETE_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DELETE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
