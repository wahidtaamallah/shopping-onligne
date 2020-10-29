const initialState = {
  loading: null,
  error: null,
  success: null,
  product: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCT_UPDATE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PRODUCT_UPDATE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'PRODUCT_UPDATE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PRODUCT_UPDATE_RESET':
      return {
        ...state,
        loading: null,
        error: null,
        success: null,
        product: {},
      };
    default:
      return state;
  }
}
