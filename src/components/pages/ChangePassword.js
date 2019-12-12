import React from "react";
import Container from "../stateless/Container";
import { PrimaryButton } from "../stateless/Buttons";
const ChangePassword = props => {
  return (
    <>
      <div className="text-center">
        <Container className="mt-6 mb-5">
          <h5 className="default-letter-spacing font-weight-bolder text-left text-md-center">
            CHANGE PASSWORD
          </h5>
          <p className="sub-header text-left text-md-center">
            TYPE THE NEW PASSWORD BELOW
          </p>
        </Container>
        <div className="secondary-background-color pt-5 pb-5 mb-5">
          <Container className="">
            <input
              className="placeholder-center primary-input w-100 w-md-40 d-block mx-auto"
              placeholder="NEW PASSWORD"
            />
            <input
              className="placeholder-center primary-input mt-4 mb-4 w-100 w-md-40 d-block mx-auto"
              placeholder="CONFIRM PASSWORD"
            />
            <PrimaryButton
              className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
              title="CHANGE PASSWORD"
            />
          </Container>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
