import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Sidebar from "../Sidebar";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import history from "../../history";

import { Row, Col, Container } from "react-bootstrap";
import Alert from "../Alert";

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
    } else {
      setNavBarBackgroundTransparent("transparent");
    }
  });

  return ReactDOM.createPortal(
    <>
      <Alert />
      <div className="z-index-max">
        <Sidebar
          isOpen={sidebarOpen}
          pageWrapId={"root"}
          outerContainerId={"header"}
          toggleMenu={toggleSideBar}
          onStateChange={state => setSidebarOpen(state.isOpen)}
        />
      </div>
      <div className={`bg-${navBarBackgroundTransparent} pt-2 pb-2`}>
        <Container>
          <Col className={`px-0 nav-bar-head`}>
            <Row className="mx-0">
              <Col className="px-0">
                <button
                  className="px-0 border-none bg-transparent text-white primary-font-size"
                  onClick={toggleSideBar}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </Col>
              <Col className="px-0">
                <div className=" user-select-none primary-font-size">
                  <p className="text-white text-center font-weight-bold default-letter-spacing">
                    R<span className="primary-color font-weight-bolder">Ǝ</span>
                    HYPED
                  </p>
                </div>
              </Col>
              <Col className="px-0">
                <button className="float-right border-none bg-transparent text-white primary-font-size">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span className="cart-item-number"></span>
                </button>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </>,
    document.querySelector("#header")
  );
};

export default Header;
