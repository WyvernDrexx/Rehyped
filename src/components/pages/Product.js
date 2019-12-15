import React, { useEffect } from "react";
import SingleProduct from "../Item";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import Carousel from "../Carousel";
import Subscribe from "../Subscribe";

const Product = props => {
  useEffect(_ => {
    window.onload = _ => {
      window.scrollTo(0, 0);
    };
  }, []);

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
