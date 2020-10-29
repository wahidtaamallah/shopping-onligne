import axios from 'axios';
const PATH = '/api/products';

export const updateProduct = (productData) => async (dispatch, getState) => {
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
    dispatch({ type: 'PRODUCT_UPDATE_REQUEST' });
    const { data } = await axios.put(
      `${PATH}/${productData._id}`,
      productData,
      config
    );
    dispatch({ type: 'PRODUCT_UPDATE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_UPDATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetProduct = () => (dispatch) => {
  dispatch({ type: 'PRODUCT_UPDATE_RESET' });
};
