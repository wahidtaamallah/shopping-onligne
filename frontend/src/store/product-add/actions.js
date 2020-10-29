import axios from 'axios';
const PATH = '/api/products';

export const addProduct = () => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    dispatch({ type: 'PRODUCT_ADD_REQUEST' });
    const { data } = await axios.post(`${PATH}`, {}, config);
    dispatch({ type: 'PRODUCT_ADD_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_ADD_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetProduct = () => (dispatch) => {
  dispatch({ type: 'PRODUCT_ADD_RESET' });
};
