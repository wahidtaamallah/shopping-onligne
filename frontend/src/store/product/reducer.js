const initialState = {
  products: null,
  product: { reviews: [] },
  loading: false,
  error: null,
  pages: null,
  page: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return {
        ...state,
        loading: true,
        products: [],
      };
    case 'PRODUCT_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case 'PRODUCT_LIST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PRODUCT_DETAILS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PRODUCT_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case 'PRODUCT_DETAILS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PRODUCT_DETAILS_CLEAR':
      return {
        ...state,
        product: { reviews: [] },
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
