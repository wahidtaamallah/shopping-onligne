const initialState = {
  loading: null,
  error: null,
  orderList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_LIST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ORDER_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        orderList: action.payload,
      };
    case 'ORDER_LIST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
