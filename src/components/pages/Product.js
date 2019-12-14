import React from "react";
import SingleProduct from "../Item";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import Carousel from "../Carousel";
import Subscribe from "../Subscribe";

const Product = props => {
  return (
    <>
      <Container className="pt-6">
        <SingleProduct />
      </Container>

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
