import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelated, clearSelected } from "../../actions";
import { Spinner } from "react-bootstrap";
import history from "../../history";

import "./Carousel.scss";

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
  const dispatch = useDispatch();
  const onClick = _ => {
    dispatch(clearSelected());
    history.push(`/products/${item._id}`);
  };
  const { item } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const onLoad = _ => {
    setIsLoaded(true);
  };

  const onImgLoad = _ => {
    setIsImgLoaded(true);
  };

  return (
    <div className="d-inline" onClick={onClick}>
      <div className="item position-relative">
        <div className="position-relative" onLoad={onLoad}>
          {isImgLoaded ? null : (
            <Spinner className="absolute-center" animation="border" />
          )}
          <img
            onLoad={onImgLoad}
            alt="Placeholder"
            className={`carousel-img ${isLoaded ? "" : "visibility-hidden"}`}
            src={`http://localhost:8000/images/products/${item.image}`}
          />
        </div>
        <div
          className={`product-details ${isLoaded ? "" : "visibility-hidden"}`}
        >
          <p className="product-name">{item.name}</p>
          <p className="product-price">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
