import React from "react";
import SingleProduct from "../SingleProduct";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import Instructions from "../Media";
import Carousel from "../Carousel";
import Subscribe from '../Subscribe';

const Product = props => {
  return (
    <>
      <Container className="">
        <SingleProduct />
        <Container className="mb-6">
          <h4 className="sub-header mb-4 text-left font-weight-bold">
            Est. delivery in 7-10 business days via preferred courier.
          </h4>
          <p className="sub-header text-left">
            *Depending on the courier partner available at your pincode.
          </p>
        </Container>
        <CommonHeader header="DETAILS" subheader="PRODUCT INSTRUCTION" />
      </Container>
      <Container className="flex-center">
        <Instructions />
      </Container>
      <Container className="px-0 mb-6 mt-6">
        <Carousel />
      </Container>
      <Subscribe />
    </>
  );
};

export default Product;
