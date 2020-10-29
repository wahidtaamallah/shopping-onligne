const initialState = {
  loading: null,
  error: null,
  success: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_DELIVER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ORDER_DELIVER_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'ORDER_DELIVER_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ORDER_DELIVER_RESET':
      return {
        ...state,
        loading: null,
        error: null,
        success: false,
      };
    default:
      return state;
  }
}
