import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelated } from "../../actions";
import { Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';

import history from "../../history";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const onLoad = _ => {
    setIsLoaded(true);
  };

  const onImgLoad = _ => {
    setIsImgLoaded(true);
  }

  return (
    <Link to={`/products/${item.productId}`}>
    <div className="item position-relative">
      <div className="position-relative" onLoad={onLoad} >
      {isImgLoaded ? null : (
          <Spinner className="absolute-center" animation="border" />
        )}
        <img onLoad={onImgLoad} alt="Placeholder" className={`carousel-img ${isLoaded ? "" : "visibility-hidden"}`} src={`${item.image}`} />
      </div>
      <div className={`product-details ${isLoaded ? "" : "visibility-hidden"}`}>
        <p className="product-name">{item.name}</p>
        <p className="product-price">${item.price}</p>
      </div>
    </div>
    </Link>
  );
};

export default Carousel;
