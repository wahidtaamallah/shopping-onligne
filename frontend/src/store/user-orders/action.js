import axios from 'axios';
const PATH = '/api/orders';

export const getUserOrders = () => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  try {
    dispatch({ type: 'USER_ORDERS_REQUEST' });
    const { data } = await axios.get(`${PATH}/myorders`, config);
    dispatch({ type: 'USER_ORDERS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_ORDERS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
