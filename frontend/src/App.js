import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Footer } from 'components/layout';
import {
  Home,
  Signin,
  Signup,
  Browse,
  Cart,
  ProductDetail,
  Profile,
  Shipping,
  Payment,
  PlaceOrder,
  OrderDetail,
  UserList,
  UserEdit,
  ProductList,
  ProductEdit,
  OrderList,
} from 'components/pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/placeorder' component={PlaceOrder} />
        <Route exact path='/payment' component={Payment} />
        <Route exact path='/shipping' component={Shipping} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/admin/productlist' component={ProductList} />
        <Route
          exact
          path='/admin/productlist/:pageNumber'
          component={ProductList}
        />
        <Route exact path='/admin/userlist' component={UserList} />
        <Route exact path='/admin/orderlist' component={OrderList} />
        <Route exact path='/browse/:text?' component={Browse} />
        <Route
          exact
          path='/browse/:text?/page/:pageNumber'
          component={Browse}
        />
        <Route exact path='/order/:id' component={OrderDetail} />
        <Route exact path='/cart/:id?' component={Cart} />
        <Route exact path='/admin/product/:id/edit' component={ProductEdit} />
        <Route exact path='/admin/user/:id/edit' component={UserEdit} />
        <Route exact path='/:id' component={ProductDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
