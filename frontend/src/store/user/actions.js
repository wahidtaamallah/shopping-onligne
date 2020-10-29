import axios from 'axios';
const PATH = '/api/users';

export const loginUser = (email, password) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: 'USER_AUTH_REQUEST' });
    const { data } = await axios.post(
      `${PATH}/login`,
      { email, password },
      config
    );
    dispatch({ type: 'USER_AUTH_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: 'USER_LOGOUT' });
};

export const register = (name, email, password) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: 'USER_AUTH_REQUEST' });
    const { data } = await axios.post(
      `${PATH}/register`,
      { name, email, password },
      config
    );
    dispatch({ type: 'USER_AUTH_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserProfile = (id) => async (dispatch, getState) => {
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
    dispatch({ type: 'USER_DETAILS_REQUEST' });
    const { data } = await axios.get(`${PATH}/${id}`, config);
    dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_DETAILS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (updatedUser) => async (
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
    dispatch({ type: 'USER_UPDATE_PROFILE_REQUEST' });
    const { data } = await axios.put(`${PATH}/profile`, updatedUser, config);
    dispatch({ type: 'USER_UPDATE_PROFILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_PROFILE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
