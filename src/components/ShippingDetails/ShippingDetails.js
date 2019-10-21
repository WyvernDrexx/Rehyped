import React from "react";
import Container from "../stateless/Container";
import { PrimaryButton } from "../stateless/Buttons";
import Divider from "../stateless/Divider";
import CheckBox from "../stateless/Checkbox";
import CommonHeader from "../stateless/CommonHeader";

const ShippingDetails = props => {
  return (
    <div className="bg-white pb-3">
      <div className="pt-4">
        <Container className="">
          <input
            className="primary-input mb-4 w-100"
            placeholder="RECEIVER'S NAME"
          />
          <input
            className="primary-input mb-4 w-100"
            placeholder="PHONE NUMBER"
          />
          <CheckBox content="RECEIVE MAILS ABOUT NEW OFFERS AND DISCOUNT" />
        </Container>
      </div>
      <div className="secondary-background-color pt-4 pb-4 mt-4 mb-4">
        <CommonHeader
          className=""
          header="ADDRESS"
          subheader="FILL IN THE DETAILS"
        />
        <Divider className="mb-4 mt-4" />
      </div>
      <div className="pt-4 mb-4 pb-4">
        <Container>
          <input className="primary-input mb-4 w-100" placeholder="ADDRESS" />
          <input className="primary-input mb-4 w-100" placeholder="LOCALITY" />
          <input className="primary-input mb-4 w-100" placeholder="LANDMARK" />
          <input className="primary-input mb-4 w-100" placeholder="CITY" />
          <input className="primary-input mb-4 w-100" placeholder="PIN CODE" />
          <input className="primary-input mb-4 w-100" placeholder="STATE" />
          <input className="primary-input mb-4 w-100" placeholder="COUNTRY" />
          <CheckBox content="SAVE THE DETAILS FOR FURTHER USE" />
        </Container>
      </div>
      <Container className="">
        <PrimaryButton
          title="SUBMIT"
          className="w-100 mb-4 w-md-40 d-block mx-auto"
        />
      </Container>
    </div>
  );
};

export default ShippingDetails;
