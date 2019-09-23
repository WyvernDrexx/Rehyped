import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";
import Home from "./pages/Home";
import "./styles/bootstrap.min.css";
import "./styles/styles.scss";

const App = _ => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;
