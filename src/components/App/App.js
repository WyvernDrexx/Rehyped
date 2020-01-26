import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../../history";
import "..//..//assets/styles/bootstrap.min.css";
import "..//../assets/styles/styles.scss";
import Header from "../Header";
import Footer from "../Footer/Footer";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import MyCart from "../pages/MyCart";
import AboutUs from "../pages/AboutUs";
import ChangePassword from "../pages/ChangePassword";
import ContactUs from "../pages/ContactUs";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import BuyProduct from "../pages/BuyProduct";
import MyAccount from "../pages/MyAccount";
import PaymentRedirect from "../PaymentRedirect";

import { useDispatch, useSelector } from "react-redux";
import { adminPanel, addProduct, ListProducts, ListOrders } from '../adminComponents';
import { getToken, verifyToken, removeToken, fetchCartItems } from "../../actions";
import { useEffect } from "react";
import Test from "../pages/Test";

const App = _ => {
  const dispatch = useDispatch();
  const { token, isVerified } = useSelector(state => state.token);

  useEffect(_ => {
    dispatch(getToken());
  }, [dispatch]);

  useEffect(
    _ => {
      if (token && token.length > 0) dispatch(verifyToken());
    },
    [token, dispatch]
  );

  useEffect(
    _ => {
      if (typeof isVerified !== "undefined" && !isVerified) {
        dispatch(removeToken());
      }
      if(isVerified){
        dispatch(fetchCartItems());
      }
    },
    [isVerified, dispatch]
  );

  return (
    <Router history={history}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/test-me" component={Test} />
      <Route exact path="/products/:productId" component={Product} />
      <Route exact path="/mycart" component={MyCart} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/change-password" component={ChangePassword} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/sign-up" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/my-account" component={MyAccount} />
      <Route exact path="/my-account/:section" component={MyAccount} />
      <Route exact path="/buy-product" component={BuyProduct} />
      <Route exact path="/payment" component={PaymentRedirect} />
      <Route exact path="/admin-pannexa" component={adminPanel} />
      <Route exact path="/admin-pannexa/add-product" component={addProduct} />
      <Route exact path="/admin-pannexa/add-product/:id" component={addProduct} />
      <Route exact path="/admin-pannexa/list-orders" component={ListOrders} />
      <Route exact path="/admin-pannexa/list-products/:section" component={ListProducts} />
      <Footer />
    </Router>
  );
};

export default App;
