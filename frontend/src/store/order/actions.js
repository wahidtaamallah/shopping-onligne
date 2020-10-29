import axios from 'axios';
const PATH = '/api/orders';

export const createOrder = (order) => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  };
  try {
    dispatch({ type: 'ORDER_CREATE_REQUEST' });
    const { data } = await axios.post(`${PATH}`, order, config);
    dispatch({ type: 'ORDER_CREATE_SUCCESS', payload: data });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: 'ORDER_CREATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  try {
    dispatch({ type: 'ORDER_DETAILS_REQUEST' });
    const { data } = await axios.get(`${PATH}/${id}`, config);
    dispatch({ type: 'ORDER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'ORDER_DETAILS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
