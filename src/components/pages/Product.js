import React from "react";
import { Container, CommonHeader } from "../stateless";
import SingleProduct from "../Item";
import Carousel from "../Carousel";
import Subscribe from "../Subscribe";

const Product = props => {
  return (
    <>
      <div className="pt-6">
        <SingleProduct />
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
