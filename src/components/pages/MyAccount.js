import React, { useState } from "react";
import Container from "../stateless/Container";
import { PrimaryButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";
import CartList from "../CartList";
import ShippingDetails from "../ShippingDetails";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import "./MyAccount.scss";

const MyAccount = props => {
  const [ordersVisibility, setOrdersVisibility] = useState(false);
  const [shippingVisibility, setShippingVisibility] = useState(false);

  const renderCartList = _ => {
    if (ordersVisibility) {
      return (
        <div className="bg-white pt-5 pb-1">
          <CartList className="mt-5" />
        </div>
      );
    } else {
      return null;
    }
  };

  const renderShippingDetails = _ => {
    if (shippingVisibility) {
      return <ShippingDetails />;
    } else {
      return null;
    }
  };

  const onShippingDetailsClick = _ => {
    if (shippingVisibility) setShippingVisibility(false);
    else setShippingVisibility(true);
  };

  const onOrdersClick = _ => {
    if (ordersVisibility) setOrdersVisibility(false);
    else setOrdersVisibility(true);
  };

  const renderArrow = val => {
    if (val) {
      return <FontAwesomeIcon icon={faChevronUp} />;
    } else {
      return <FontAwesomeIcon icon={faChevronDown} />;
    }
  };

  return (
    <div>
      <Container className="mt-6 mb-5">
        <h1 className="header text-left">HEY, JAMES</h1>
        <p className="sub-header text-left">HERE'S ALL THE DETAILS</p>
      </Container>
      <div className="secondary-background-color">
        <div className="my-account pt-2 pb-2">
          <div className="pt-3 pb-3 options">
            <Container>
              <p
                onClick={onOrdersClick}
                className="sub-header font-weight-bolder text-left mb-3"
              >
                ORDERS {renderArrow(ordersVisibility)}
              </p>
            </Container>
            <div className="bg-white">
              <Container className="bg-white">{renderCartList()}</Container>
            </div>
          </div>
          <div className="pb-3 options">
            <Container>
              <p
                onClick={onShippingDetailsClick}
                className="sub-header font-weight-bolder text-left pb-3"
              >
                SHIPPING DETAILS {renderArrow(shippingVisibility)}
              </p>
            </Container>

            {renderShippingDetails()}
          </div>
          <div className="pb-3 options">
            <Container>
              <p className="sub-header font-weight-bolder text-left">
                CHANGE PASSWORD <FontAwesomeIcon icon={faChevronRight} />
              </p>
            </Container>
          </div>
          <div className="pt-3 pb-3 options">
            <Container>
              <p className="sub-header font-weight-bolder text-left">
                TRACK ORDERS <FontAwesomeIcon icon={faChevronRight} />
              </p>
            </Container>
          </div>
        </div>
      </div>
      <Container className="mt-5 mb-5">
        <Link className="sub-header d-block mb-2" to="/help">
          NEED HELP?
        </Link>
        <PrimaryButton
          className="w-100 w-md-40 d-block mx-auto"
          title="CONTACT US"
        />
      </Container>
    </div>
  );
};

export default MyAccount;
