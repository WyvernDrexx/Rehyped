import React from "react";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div className="text-center mt-6">
      <CommonHeader header="LOGIN" subheader="WELCOME BACK" className="mb-5" />
      <div className="secondary-background-color pt-5 pb-5 mb-5">
        <Container className="w-md-40">
          <input
            className="placeholder-center primary-input w-100 d-block mx-auto"
            placeholder="EMAIL"
            type="email"
          />
          <input
            className="placeholder-center primary-input mt-4 mb-3 w-100 d-block mx-auto"
            placeholder="PASSWORD"
            type="password"
          />
          <PrimaryButton
            className="mt-4 mx-auto d-block w-100 font-weight-bold"
            title="LOGIN"
          />
          <Link className="sub-header text-left  d-block mt-3" to="/forgot-password">FORGOT PASSWORD?</Link>
        </Container>
      </div>
      <Container className="mb-5 w-md-40">
        <DarkButton
          className="mt-4 mx-auto d-block w-100  font-weight-bold"
          title="FIRST TIME HERE?"
        />
      </Container>
    </div>
  );
};

export default Login;
