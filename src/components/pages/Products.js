import React, { useState } from "react";
import { Container, CommonHeader } from "../stateless";
import { DarkButton } from "../stateless/Buttons";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../ProductsList";
import { fetchMore } from "../../actions";

const Products = props => {
  const [slot, setSlot] = useState(2);
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.requestStatus.fetchMore);

  const onLoadMoreClick = _ => {
    dispatch(fetchMore(slot));
    setSlot(slot + 1);
  };

  return (
    <>
      <Container className="mt-5">
        <CommonHeader
          className="mb-5"
          header="MERCH"
          subheader="REHYPED ORIGINALS"
        />
      </Container>
      <Container className="px-2">
      <ProductsList />

      </Container>
      <DarkButton
        className={`mt-5 pt-3 pb-3 d-block mx-auto mb-5 ${
          isFetching ? "status-running" : ""
        }`}
        title="LOAD MORE"
        onClick={onLoadMoreClick}
      />
    </>
  );
};

export default Products;
