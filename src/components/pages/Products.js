import React, { useState } from "react";
import { Container, CommonHeader } from "../stateless";
import { DarkButton } from "../stateless/Buttons";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
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
      <Container className="mt-5 pb-5">
        <CommonHeader
          className=""
          header="MERCH"
          subheader="REHYPED ORIGINALS"
        />
        <SearchBar className="mt-5 mb-5" />
        <ProductsList />
        <DarkButton
          className={`mt-5 pt-3 pb-3 d-block mx-auto mb-5 ${isFetching?"status-running":""}`}
          title="LOAD MORE"
          onClick={onLoadMoreClick}
        />
      </Container>
    </>
  );
};

export default Products;
