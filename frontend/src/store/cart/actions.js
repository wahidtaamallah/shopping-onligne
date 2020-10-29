import axios from 'axios';
const PATH = '/api/products';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`${PATH}/${id}`);
  dispatch({
    type: 'CART_ADD_ITEM',
    payload: {
      product: data._id,
      title: data.title,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      rating: data.rating,
      quantity,
    },
  });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartApp.cartItems)
  );
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: 'CART_REMOVE_ITEM', payload: id });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartApp.cartItems)
  );
};

export const saveShippongAddress = (data) => async (dispatch) => {
  dispatch({ type: 'CART_SAVE_SHIPPING_ADDRESS', payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({ type: 'CART_SAVE_PAYMENT_METHOD', payload: data });
  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
