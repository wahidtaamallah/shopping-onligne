const initialState = {
  order: null,
  loading: false,
  error: null,
  success: false,
  orderDetails: { orderItems: [], shippingAddress: {} },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_CREATE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ORDER_CREATE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      };
    case 'ORDER_CREATE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ORDER_DETAILS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ORDER_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        orderDetails: action.payload,
      };
    case 'ORDER_DETAILS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
