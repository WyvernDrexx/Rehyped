import React from "react";
import SingleProduct from "../Item";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import Instructions from "../Media";
import Carousel from "../Carousel";
import Subscribe from "../Subscribe";

const Product = props => {
  return (
    <>
      <Container className="pt-6">
        <SingleProduct />
        <div className="mb-6">
          <h4 className="sub-header mb-4 text-left font-weight-bold">
            Est. delivery in 7-10 business days via preferred courier.
          </h4>
          <p className="sub-header text-left">
            *Depending on the courier partner available at your pincode.
          </p>
        </div>
        <CommonHeader header="DETAILS" subheader="PRODUCT INSTRUCTION" />
      </Container>
      <div className="secondary-background-color mt-6">
        <Container className="px-0">
          <Instructions />
        </Container>
      </div>
      <Container className="px-0 mb-6 mt-6">
        <CommonHeader
          header="RELATED"
          subheader="PRODUCTS YOU MAY LIKE"
          className="mb-5"
        />
        <Carousel />
      </Container>
      <Subscribe />
    </>
  );
};

export default Product;
