import React from "react";
import { Container } from "../stateless";
import { PrimaryButton } from "../stateless/Buttons";

const ForgotPassword = props => {
  return (
    <>
      <div className="text-center">
        <Container className="mt-5 mb-4">
          <h5 className="default-letter-spacing font-weight-bolder text-left text-md-center">
            FORGOT PASSWORD
          </h5>
          <p className="sub-header text-left text-md-center">
            TYPE THE EMAIL ADDRESS BELOW
          </p>
        </Container>
        <div className="secondary-background-color pt-4 pb-4 mb-5">
          <Container className="">
            <input
              className="placeholder-center primary-input w-100 w-md-40 d-block mx-auto"
              placeholder="EMAIL"
              type="email"
            />
            <PrimaryButton
              className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
              title="SEND"
            />
          </Container>
        </div>
        <Container>
          <p className="sub-header text-left default-line-height mb-6">
            AN CONFIRMATION EMAIL WITH INSTRUCTIONS WILL BE SENT. FOLLOW THE
            EMAIL TO RESET YOUR PASSWORD
          </p>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
