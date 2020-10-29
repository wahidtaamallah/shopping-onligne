const initialState = {
  loading: null,
  error: null,
  products: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCT_TOP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PRODUCT_TOP_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case 'PRODUCT_TOP_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
