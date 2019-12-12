import React, { useEffect } from "react";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import SearchBar from "../SearchBar";
import ProductsList from "../ProductsList";
import { DarkButton } from "../stateless/Buttons";
import Header from "../Header";
const Products = props => {
  useEffect(_ => {
    setTimeout(_ => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <>
    <Header />
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
