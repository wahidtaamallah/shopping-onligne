import axios from 'axios';
const PATH = '/api/products';

export const loadTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_TOP_REQUEST' });
    const { data } = await axios.get(`${PATH}/top`);
    dispatch({ type: 'PRODUCT_TOP_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_TOP_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
