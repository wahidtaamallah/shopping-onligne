const initialState = {
  loading: null,
  error: null,
  success: null,
  product: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCT_ADD_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PRODUCT_ADD_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };
    case 'PRODUCT_ADD_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PRODUCT_ADD_RESET':
      return {
        ...state,
        loading: null,
        error: null,
        success: null,
        product: null,
      };
    default:
      return state;
  }
}
