import React, { useState, useEffect } from "react";
import { Container, CommonHeader } from "../stateless";
import { DarkButton } from "../stateless/Buttons";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../ProductsList";
import { fetchMore } from "../../actions";
import Loader from "../Loader/Loader";

import "./Products.scss";

const Products = props => {
  const [slot, setSlot] = useState(1);
  const [tagSelect, setTagSelect] = useState("all");
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.requestStatus.fetchMore);
  const productsEnd = useSelector(state => state.productsEnd);
  console.log(productsEnd);

  const onLoadMoreClick = _ => {
    setSlot(slot + 1);
  };

  useEffect(
    _ => {
      dispatch(fetchMore(slot, tagSelect));
    },
    [slot, tagSelect]
  );

  useEffect(
    _ => {
      setSlot(1);
    },
    [tagSelect]
  );

  const renderActive = tag => (tag === tagSelect ? " active " : "");

  return (
    <>
      <Container className="mt-6">
        <CommonHeader
          className="mb-5"
          header="MERCH"
          subheader="REHYPED ORIGINALS"
        />
      </Container>
      <div className="products-tags">
        <DarkButton
          onClick={_ => setTagSelect("aesthetics")}
          className={`product-tag ${renderActive("aesthetics")}`}
          title="AESTHETICS"
        />
        <DarkButton
          onClick={_ => setTagSelect("vapourwave")}
          className={`product-tag ${renderActive("vapourwave")}`}
          title="VAPOURWAVE"
        />
        <DarkButton
          onClick={_ => setTagSelect("anime")}
          className={`product-tag ${renderActive("anime")}`}
          title="ANIME"
        />
        <DarkButton
          onClick={_ => setTagSelect("merch")}
          className={`product-tag ${renderActive("merch")}`}
          title="MERCH"
        />
        <DarkButton
          onClick={_ => setTagSelect("vintage")}
          className={`product-tag ${renderActive("vintage")}`}
          title="VINTAGE"
        />
        <DarkButton
          onClick={_ => setTagSelect("all")}
          className={`product-tag ${renderActive("all")}`}
          title="ALL"
        />
      </div>

      {isFetching && slot === 1 ? (
        <div className="mt-4 mb-4">
          <Loader />
        </div>
      ) : (
        <Container className="px-2">
          <ProductsList slot={1} tag={tagSelect} />
        </Container>
      )}

      {!productsEnd ? (
        <DarkButton
          className={`mt-5 pt-3 pb-3 d-block mx-auto mb-5 ${
            isFetching ? "status-running" : ""
          }`}
          title="LOAD MORE"
          onClick={onLoadMoreClick}
        />
      ) : (
        <div className="mt-3"></div>
      )}
    </>
  );
};

export default Products;
