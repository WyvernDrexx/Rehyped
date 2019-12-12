import React from "react";
import Container from "../stateless/Container";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import Checkbox from "../stateless/Checkbox";
import Header from "../Header";

const CreateAccount = props => {
  return (
    <>
      <Header />
      <div className="text-center mt-6">
        <h1 className="header mb-5">SIGN UP</h1>
        <div className="secondary-background-color pt-5 pb-5 mb-5 mt-5">
          <Container className="">
            <input
              className="placeholder-center primary-input w-100 w-md-40 d-block mx-auto"
              placeholder="FULL NAME"
            />
            <input
              className="placeholder-center primary-input mt-4 mb-3 w-100 w-md-40 d-block mx-auto"
              placeholder="EMAIL"
              type="email"
            />
            <input
              className="placeholder-center primary-input mt-4 mb-3 w-100 w-md-40 d-block mx-auto"
              placeholder="PASSWORD"
              type="password"
            />
            <div className="mt-5">
              <Checkbox content="Keep me updated with news and exclusive offers." />
            </div>
            <PrimaryButton
              className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
              title="SIGN UP"
            />
          </Container>
        </div>
        <Container className="mb-5">
          <DarkButton
            className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
            title="ALREADY HAVE AN ACCOUNT?"
          />
        </Container>
      </div>
    </>
  );
};

export default CreateAccount;
