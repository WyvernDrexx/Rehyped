import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../../history";
import "..//..//assets/styles/bootstrap.min.css";
import "..//../assets/styles/styles.scss";
import Header from '../Header';
import Footer from '../Footer/Footer';

import Home from "../pages/Home";
import Products from '../pages/Products';
import Product from '../pages/Product';
import MyCart from '../pages/MyCart';

const App = _ => {
  return (
    <Router history={history}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/mycart" component={MyCart} />
      <Footer />
    </Router>
  );
};

export default App;
