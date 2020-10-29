const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCT_ADD_REVIEW_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PRODUCT_ADD_REVIEW_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'PRODUCT_ADD_REVIEW_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PRODUCT_ADD_REVIEW_RESET':
      return {
        ...state,
        loading: null,
        error: null,
        success: null,
      };
    default:
      return state;
  }
}
