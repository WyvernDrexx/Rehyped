import React from "react";
import { Container, CommonHeader } from "../stateless";
import { DarkButton } from "../stateless/Buttons";

import SearchBar from "../SearchBar";
import ProductsList from "../ProductsList";

const Products = props => {
  return (
    <>
      <Container className="mt-5 pt-5 pb-5">
        <CommonHeader
          className=""
          header="MERCH"
          subheader="ANDROCRUNCH ORIGINALS"
        />
        <SearchBar className="mt-5 mb-5" />
        <ProductsList />
        <DarkButton
          className="mt-5 pt-3 pb-3 d-block mx-auto mb-5"
          title="LOAD MORE"
        />
      </Container>
    </>
  );
};

export default Products;
