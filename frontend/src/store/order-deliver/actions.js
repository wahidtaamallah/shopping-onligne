import axios from 'axios';
const PATH = '/api/orders';

export const deliverOrder = (id) => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  try {
    dispatch({ type: 'ORDER_DELIVER_REQUEST' });
    const { data } = await axios.put(`${PATH}/${id}/deliver`, {}, config);
    dispatch({ type: 'ORDER_DELIVER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'ORDER_DELIVER_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deliverReset = () => async (dispatch) => {
  dispatch({ type: 'ORDER_DELIVER_RESET' });
};
