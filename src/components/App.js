import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";
import "./styles/bootstrap.min.css";
import "./styles/styles.scss";
import Header from './Header';
import Footer from './Footer';

import Home from "./pages/Home";
import Products from './pages/Products';
import Product from './pages/Product';

const App = _ => {
  return (
    <Router history={history}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product" component={Product} />
      <Footer />
    </Router>
  );
};

export default App;
