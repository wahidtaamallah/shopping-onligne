import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import userReducer from './user/reducer';
import orderReducer from './order/reducer';
import orderListReducer from './order-list/reducer';
import orderDeliverReducer from './order-deliver/reducer';
import paypalReducer from './paypal/reducer';
import userOrdersReducer from './user-orders/reducer';
import userListReducer from './user-list/reducer';
import userDeleteReducer from './user-delete/reducer';
import userUpdateReducer from './user-update/reducer';
import productDeleteReducer from './product-delete/reducer';
import productAddReducer from './product-add/reducer';
import productUpdateReducer from './product-update/reducer';
import productTopReducer from './product-top/reducer';
import reviewAddReducer from './review-add/reducer';

const rootReducer = combineReducers({
  mainApp: productReducer,
  cartApp: cartReducer,
  userApp: userReducer,
  orderApp: orderReducer,
  orderListApp: orderListReducer,
  orderDeliverApp: orderDeliverReducer,
  paypalApp: paypalReducer,
  userOrdersApp: userOrdersReducer,
  userListApp: userListReducer,
  userDeleteApp: userDeleteReducer,
  userUpdateApp: userUpdateReducer,
  productDeleteApp: productDeleteReducer,
  productAddApp: productAddReducer,
  productUpdateApp: productUpdateReducer,
  productTopApp: productTopReducer,
  reviewAddApp: reviewAddReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
