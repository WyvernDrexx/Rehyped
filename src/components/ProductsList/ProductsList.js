import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { Container, ErrorBlock } from "../stateless";
import "./ProductsList.scss";
import Loader from "../Loader/Loader";

const ProductsList = ({slot,tag}) => {
  const products = useSelector(state => state.products);

  useEffect(
    _ => {
      window.onload = _ => {
        window.scrollTo(0, 0);
      };
    },
    [products.length, tag]
  );

  const renderList = (list = []) => {
    if (tag !== "all")
      list = list.filter(item => item.tag === tag);
    return list.map((item, index) => {
      return <ListItem key={index} item={item} index={index} />;
    });
  };

  if (products.message) {
    return (
      <Container>
        <ErrorBlock message={products.message} />
      </Container>
    );
  }

  if (Object.values(products).length === 0) {
    return (
      <>
        <div className="mt-4 mb-4">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <div className="flex-center">
      <Row className="products-list justify-content-center">
        {renderList(products)}
      </Row>
    </div>
  );
};

export default ProductsList;
