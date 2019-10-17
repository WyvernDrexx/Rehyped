import React from "react";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";

const ChangePassword = props => {
  return (
    <div className="text-center">
      <Container className="mt-5 mb-4">
        <h5 className="default-letter-spacing font-weight-bolder text-left text-md-center">
          CHANGE PASSWORD
        </h5>
        <p className="sub-header text-left text-md-center">TYPE THE NEW PASSWORD BELOW</p>
      </Container>
      <div className="secondary-background-color pt-4 pb-4 mb-5">
        <Container className="">
          <input
            className="placeholder-center primary-input w-100 w-md-40 d-block mx-auto"
            placeholder="NEW PASSWORD"
          />
          <input
            className="placeholder-center primary-input mt-4 mb-3 w-100 w-md-40 d-block mx-auto"
            placeholder="CONFIRM PASSWORD"
          />
          <PrimaryButton
          className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
          title="CHANGE PASSWORD"
        />
        </Container>
      </div>
    </div>
  );
};

export default ChangePassword;
