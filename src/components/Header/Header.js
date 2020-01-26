import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import history from "../../history";

import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";

import TopBanner from "../TopBanner";
import Sidebar from "../Sidebar";
import Alert from '../Alert';
import Notification from '../Notification';
import "./Header.scss";

const Header = props => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const cart = useSelector(state => state.cart);
  const toggleSideBar = _ => {
    setTimeout(_ => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      } else setSidebarOpen(true);
    },100)
  };

  useEffect(
    _ => {
      if (cart && cart.length === 0) {
        setIsCartEmpty(true);
      } else {
        setIsCartEmpty(false);
      }
    },
    [cart]
  );

  return ReactDOM.createPortal(
    <>
      <TopBanner />
      <Alert />
      <Notification />
      <div className="z-index-max">
        <Sidebar
          isOpen={sidebarOpen}
          pageWrapId={"root"}
          outerContainerId={"header"}
          toggleMenu={toggleSideBar}
          onStateChange={state => setSidebarOpen(state.isOpen)}
        />
      </div>
      <div className={`pt-2 pb-2`}>
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
              <Col xs={7} md={5} lg={2} className="px-0">
                <div className=" user-select-none primary-font-size">
                  <img className="w-100" src="/logo.png" alt="Rehyped Logo" />
                </div>
              </Col>
              <Col className="px-0">
                <button
                  onClick={_ => history.push("/mycart")}
                  className="float-right border-none bg-transparent text-white primary-font-size"
                >
                  <FontAwesomeIcon icon={faShoppingBag} />
                  {isCartEmpty ? null : (
                    <span className="cart-item-number"></span>
                  )}
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
