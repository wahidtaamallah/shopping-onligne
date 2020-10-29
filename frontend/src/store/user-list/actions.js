import axios from 'axios';
const PATH = '/api/users';

export const getUserList = () => async (dispatch, getState) => {
  const {
    userApp: { user },
  } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  try {
    dispatch({ type: 'USER_LIST_REQUEST' });
    const { data } = await axios.get(`${PATH}`, config);
    dispatch({ type: 'USER_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_LIST_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
