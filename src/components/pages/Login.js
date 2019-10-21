import React from "react";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div className="text-center mt-5">
      <CommonHeader header="LOGIN" subheader="WELCOME BACK" className="mb-4" />
      <div className="secondary-background-color pt-4 pb-4 mb-5">
        <Container className="">
          <input
            className="placeholder-center primary-input w-100 w-md-40 d-block mx-auto"
            placeholder="EMAIL"
            type="email"
          />
          <input
            className="placeholder-center primary-input mt-4 mb-3 w-100 w-md-40 d-block mx-auto"
            placeholder="PASSWORD"
            type="password"
          />
          <PrimaryButton
            className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
            title="LOGIN"
          />
          <Link className="sub-header text-left d-block mt-3" to="/forgot-password">FORGOT PASSWORD?</Link>
        </Container>
      </div>
      <Container className="mb-6">
        <DarkButton
          className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
          title="FIRST TIME HERE?"
        />
      </Container>
    </div>
  );
};

export default Login;