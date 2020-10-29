import axios from 'axios';
const PATH = '/api/users';

export const updateUser = (userData) => async (dispatch, getState) => {
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
    dispatch({ type: 'USER_UPDATE_REQUEST' });
    const { data } = await axios.put(
      `${PATH}/${userData._id}`,
      userData,
      config
    );
    dispatch({ type: 'USER_UPDATE_SUCCESS' });
    dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetUser = () => (dispatch) => {
  dispatch({ type: 'USER_UPDATE_RESET' });
};
