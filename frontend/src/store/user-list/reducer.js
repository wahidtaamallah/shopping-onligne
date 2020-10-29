const initialState = {
  loading: null,
  error: null,
  userList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LIST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };
    case 'USER_LIST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
