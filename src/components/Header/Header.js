import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Sidebar from "../Sidebar";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import history from "../../history";

import { Row, Col } from "react-bootstrap";

const Header = props => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [
    navBarBackgroundTransparent,
    setNavBarBackgroundTransparent
  ] = useState("black");

  const toggleSideBar = _ => {
    console.log(sidebarOpen);
    if (sidebarOpen) setSidebarOpen(false);
    else setSidebarOpen(true);
  };

  useEffect(_ => {
    if (history.location.pathname !== "/") {
      setNavBarBackgroundTransparent("black");
    }else{
      setNavBarBackgroundTransparent("transparent");
    }
  });

  return ReactDOM.createPortal(
    <div className="body-header">
      <div className="z-index-max">
        <Sidebar
          isOpen={sidebarOpen}
          pageWrapId={"root"}
          outerContainerId={"header"}
          toggleMenu={toggleSideBar}
          onStateChange={state => setSidebarOpen(state.isOpen)}
        />
      </div>
      <Row className={`bg-${navBarBackgroundTransparent} mx-0`}>
        <Col>
          <button
            className="px-0 border-none bg-transparent text-white primary-font-size"
            onClick={toggleSideBar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </Col>
        <Col className="d-flex align-items-center">
          <div className="text-white font-weight-bold mx-auto default-letter-spacing user-select-none primary-font-size">
            R<span className="primary-color font-weight-bolder">E</span>HYPED
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <button className="pr-2 border-none bg-transparent text-white text-left primary-font-size">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="cart-item-number"></span>
          </button>
        </Col>
      </Row>
    </div>,
    document.querySelector("#header")
  );
};

export default Header;
