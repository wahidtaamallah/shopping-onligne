import { userFromStorage } from 'services/localStorageService';

const initialState = {
  user: userFromStorage,
  loading: false,
  error: null,
  profile: {},
  success: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_AUTH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case 'USER_AUTH_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        user: {},
        profile: {},
      };
    case 'USER_DETAILS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case 'USER_DETAILS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_UPDATE_PROFILE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_UPDATE_PROFILE_SUCCESS':
      const updatedProfile = {
        _id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
      return {
        ...state,
        loading: false,
        user: action.payload,
        profile: updatedProfile,
        success: true,
      };
    case 'USER_UPDATE_PROFILE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_UPDATE_PROFILE_RESET':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
