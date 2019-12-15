import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelated } from "../../actions";
import { Spinner } from "react-bootstrap";

const Carousel = props => {
  const dispatch = useDispatch();
  const relatedItem = useSelector(state => state.relatedItem);

  useEffect(_ => {
    dispatch(fetchRelated());
  }, []);

  if (relatedItem.length === 0) {
    return <Spinner animation="border" className="block-center" />;
  }
  return (
    <>
      <div className="carousel-custom container">
        {relatedItem.map((item, index) => {
          return <CarouselItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

const CarouselItem = props => {
  const { item } = props;
  return (
    <div className="item">
      <div>
        <img alt="Placeholder" className="carousel-img" src={`${item.image}`} />
      </div>
      <div className="product-details">
        <p className="product-name">{item.name}</p>
        <p className="product-price">${item.price}</p>
      </div>
    </div>
  );
};

export default Carousel;
