import React, { useState } from "react";
import Container from "../stateless/Container";
import { PrimaryButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";
import CartList from "../CartList";
import ShippingDetails from "../ShippingDetails";

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
  }

  const onOrdersClick = _ => {
    if (ordersVisibility) setOrdersVisibility(false);
    else setOrdersVisibility(true);
  };

  return (
    <div>
      <Container className="mt-6 mb-3">
        <h1 className="header text-left">HEY, JAMES</h1>
        <p className="sub-header text-left">HERE'S ALL THE DETAILS</p>
      </Container>
      <div className="secondary-background-color">
        <div className="my-account pt-2 pb-2">
          <div className="pt-3 pb-3 options">
            <p
              onClick={onOrdersClick}
              className="sub-header font-weight-bolder text-left mx-4 mb-3"
            >
              ORDERS
            </p>
            {renderCartList()}
          </div>
          <div className="pb-3 options">
            <p 
              onClick={onShippingDetailsClick}
            className="sub-header font-weight-bolder text-left mx-4 pb-3">
              SHIPPING DETAILS
            </p>
            {renderShippingDetails()}
          </div>
          <div className="pb-3 options">
            <p className="sub-header font-weight-bolder text-left mx-4">
              CHANGE PASSWORD
            </p>
          </div>
          <div className="pt-3 pb-3 options">
            <p className="sub-header font-weight-bolder text-left mx-4">
              TRACK ORDERS
            </p>
          </div>
        </div>
      </div>
      <Container className="mt-6 mb-6">
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
