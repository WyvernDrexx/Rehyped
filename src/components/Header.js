import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";

const Header = props => {
  return ReactDOM.createPortal(
    <>
      <Sidebar />
    </>,
    document.querySelector("#header")
  );
};

export default Header;
