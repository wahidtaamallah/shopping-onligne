import axios from 'axios';
const PATH = '/api/orders';

export const getOrderList = () => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    dispatch({ type: 'ORDER_LIST_REQUEST' });
    const { data } = await axios.get(`${PATH}`, config);
    dispatch({ type: 'ORDER_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'ORDER_LIST_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
