import axios from 'axios';
const PATH = '/api/orders';

export const payOrder = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
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
    dispatch({ type: 'ORDER_PAY_REQUEST' });
    const { data } = await axios.put(
      `${PATH}/${orderId}/pay`,
      paymentResult,
      config
    );
    dispatch({ type: 'ORDER_PAY_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'ORDER_PAY_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payReset = () => async (dispatch) => {
  dispatch({ type: 'ORDER_PAY_RESET' });
};
