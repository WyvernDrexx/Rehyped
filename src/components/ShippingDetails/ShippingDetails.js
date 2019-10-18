import React from "react";
import Container from "../stateless/Container";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import Divider from "../stateless/Divider";
import CheckBox from "../stateless/Checkbox";
import CommonHeader from "../stateless/CommonHeader";

const ShippingDetails = props => {
  return (
    <div className="bg-white pb-3">
      <div className=" pt-5">
        <Container className="">
          <input className="primary-input mb-3 w-100" placeholder="RECEIVER'S NAME" />
          <input className="primary-input mb-3 w-100" placeholder="PHONE NUMBER" />
          <CheckBox content="RECEIVE MAILS ABOUT NEW OFFERS AND DISCOUNT" />
        </Container>
      </div>
      <CommonHeader header="ADDRESS" subheader="FILL IN THE DETAILS" />
      <Divider className="mb-4 mt-3" />
      <div className=" pt-5 mb-4 pb-4">
        <Container>
          <input className="primary-input mb-3 w-100" placeholder="PHONE NUMBER" />
          <input className="primary-input mb-3 w-100" placeholder="PHONE NUMBER" />
          <input className="primary-input mb-3 w-100" placeholder="PHONE NUMBER" />
          <input className="primary-input mb-3 w-100" placeholder="PHONE NUMBER" />
          <input className="primary-input mb-3 w-100" placeholder="PHONE NUMBER" />
          <input className="primary-input mb-3 w-100" placeholder="PHONE NUMBER" />
          <input className="primary-input mb-4 w-100" placeholder="PHONE NUMBER" />
          <CheckBox content="SAVE THE DETAILS FOR FURTHER USE" />
        </Container>
      </div>
      <Container className="">
        <PrimaryButton 
          title="SUBMIT"
          className="w-100 mb-3 w-md-40 d-block mx-auto"
        />
      </Container>
    </div>
  );
};

export default ShippingDetails;
