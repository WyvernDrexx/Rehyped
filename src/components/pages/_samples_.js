import React from "react";

import { DarkButton, LightButton, PrimaryButton } from "../stateless/Buttons";
import Container from "../stateless/Container";
import ItemSizes from "../ItemSizes";
import Divider from "../stateless/Divider";
import Carousel from "../Carousel";
import ItemColors from "../ItemColors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Samples = props => {
  return (
    <div>
      <Container className="mt-5">
        <DarkButton
          title="GO TO STORE"
          className="w-75"
        />
        <FontAwesomeIcon icon="twitter" />
        <div>
          <LightButton
            className="mt-4 mx-auto d-block w-100"
            title="ADD TO CART"
          />
        </div>
        <div>
          <PrimaryButton
            className="mt-4 mx-auto d-block w-100"
            title="BUY IT NOW"
          />
        </div>
        <div></div>
        <div className="mt-5">
          <ItemSizes />
        </div>
        <div>
          <Carousel />
        </div>
      </Container>
      <Container className="mt-4">
        <h4 className="default-letter-spacing default-font-size">COLORS</h4>
        <ItemColors />
      </Container>
      <div className="mt-5 secondary-background-color">
        <Container className="pt-5 pb-5">
          <h3 className="header">NEWS LETTER</h3>
          <h5 className="sub-header">FOLLOW US FOR GIVEAWAYS</h5>
          <input
            className="placeholder-center primary-input w-100 mt-5"
            placeholder="ENTER YOUR EMAIL"
          />
          <PrimaryButton
            className="mt-4 mx-auto d-block font-weight-bold w-100"
            title="SUBSCRIBE"
          />
          <Divider />
        </Container>
      </div>
      <div className="mt-5 mb-5">
        <h3 className="header">NEWS LETTER</h3>
        <h5 className="sub-header">FOLLOW US FOR GIVEAWAYS</h5>
        <Divider className="" />
      </div>
    </div>
  );
};

export default Samples;
