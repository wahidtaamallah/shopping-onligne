const initialState = {
  loading: null,
  error: null,
  userOrders: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_ORDERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_ORDERS_SUCCESS':
      return {
        ...state,
        loading: false,
        userOrders: action.payload,
      };
    case 'USER_ORDERS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
