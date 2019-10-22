import React from "react";

import { PrimaryButton } from "../stateless/Buttons";
import CommonHeader from "../stateless/CommonHeader";
import Container from "../stateless/Container";
import "./Subscribe.scss";

const Subscribe = props => {
  return (
    <div className="secondary-background-color pt-5 pb-5 subscribe">
      <Container className=''>
        <CommonHeader
          className=""
          header="NEWS LETTER"
          subheader=" SIGN UP TO GET DISCOUNTS ON
          PREMIUM PRODUCTS"
        />
        <input
          className="placeholder-center primary-input mt-5"
          placeholder="ENTER YOUR EMAIL"
        />
        <PrimaryButton
          className="mt-4 mx-auto d-block font-weight-bold"
          onClick={() => console.log("Clicked subscribe button!")}
          title="SUBSCRIBE"
        />
      </Container>
    </div>
  );
};

export default Subscribe;
