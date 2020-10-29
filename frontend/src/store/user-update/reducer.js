const initialState = {
  loading: null,
  error: null,
  success: null,
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_UPDATE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_UPDATE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'USER_UPDATE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_UPDATE_RESET':
      return {
        ...state,
        loading: null,
        error: null,
        success: null,
        user: {},
      };
    default:
      return state;
  }
}
