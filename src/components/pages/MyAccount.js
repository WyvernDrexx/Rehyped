import React, { useState } from "react";
import Container from "../stateless/Container";
import { PrimaryButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";

import "./MyAccount.scss";

const MyAccount = props => {
  return (
    <div>
      <Container className="mt-5 mb-3">
        <h1 className="header text-left">HEY, JAMES</h1>
        <p className="sub-header text-left">HERE'S ALL THE DETAILS</p>
      </Container>
      <div className="secondary-background-color">
        <Container className="my-account pt-2 pb-2">
          <div className="pt-3 pb-3">
            <p className="sub-header font-weight-bolder text-left">ORDERS</p>
          </div>
          <div className="pt-3 pb-3">
            <p className="sub-header font-weight-bolder text-left">
              SHIPPING DETAILS
            </p>
          </div>
          <div className="pt-3 pb-3">
            <p className="sub-header font-weight-bolder text-left">
              CHANGE PASSWORD
            </p>
          </div>
          <div className="pt-3 pb-3">
            <p className="sub-header font-weight-bolder text-left">
              TRACK ORDERS
            </p>
          </div>
        </Container>
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
