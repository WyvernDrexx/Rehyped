import React, { useEffect } from "react";
import { Container } from "../../stateless";
import { fetchProducts } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import "./ListProducts.scss";
import SingleItem from "./SingleItem";

export default _ => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const token = useSelector(state => state.token);
  useEffect(_ => {
    dispatch(fetchProducts());
  }, []);

  if(token.isVerified){
    if (products && products.length > 0) {
      return (
        <Container className="mt-5 pt-5 pb-5">
          {products.map((item, index) => {
            return <SingleItem key={index} item={item} />;
          })}
        </Container>
      );
    } 
    else if(products && products.length === 0){
      return (
        <Container className="mt-5 pt-5 pb-5">
          <h1 className="header">No products found!</h1>
        </Container>
      );
    }
    else {
      return (
        <Container className="mt-5 pt-5 pb-5">
          <Spinner className="block-center" animation="border" />
        </Container>
      );
    }
  }else{
    return null;
  }
  
};
