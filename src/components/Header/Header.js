import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "../Sidebar";
import './Header.scss';

const Header = props => {
  return ReactDOM.createPortal(
    <>
      <Sidebar pageWrapId={"root"} outerContainerId={"header"} />
    </>,
    document.querySelector("#header")
  );
};

export default Header;
