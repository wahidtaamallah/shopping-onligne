const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_DELETE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_DELETE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'USER_DELETE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
