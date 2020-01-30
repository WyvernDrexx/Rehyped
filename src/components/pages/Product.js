import React from "react";
import { CommonHeader } from "../stateless";
import SingleProduct from "../Item";
import Carousel from "../Carousel";
import Subscribe from "../Subscribe";

const Product = props => {
  return (
    <>
      <div className="pt-5">
        <SingleProduct />
      </div>

      <CommonHeader
        header="RELATED"
        subheader="PRODUCTS YOU MAY LIKE"
        className="mb-5"
      />

      <div className="mt-5 mb-5">
        <Carousel />
      </div>

      <Subscribe />
    </>
  );
};

export default Product;
