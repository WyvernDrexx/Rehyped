import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";
import Home from "./pages/Home";
import "./styles/bootstrap.min.css";
import "./styles/styles.scss";
import Header from './Header';
import Footer from './Footer';

const App = _ => {
  return (
    <Router history={history}>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </Router>
  );
};

export default App;
