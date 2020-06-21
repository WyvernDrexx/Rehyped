import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelated } from "../../actions";
import Loader from '../Loader';
import "./Carousel.scss";
import CarouselItem from './CarouselItem';

const Carousel = () => {
  const dispatch = useDispatch();
  const relatedItem = useSelector(state => state.relatedItem);

  useEffect(
    _ => {
      dispatch(fetchRelated());
    },
    [dispatch]
  );

  const renderItemList = _ => {
    if (!relatedItem || relatedItem.length === 0) {
      return <Loader className="absolute-center" animation="border" />;
    }
    return (
      <div className="carousel-root">
        {relatedItem.map((item, index) => {
          return <CarouselItem key={index} item={item} />;
        })}
      </div>
    );
  };

  return (
    <>
      <div className="carousel-custom container">{renderItemList()}</div>
    </>
  );
};


export default Carousel;
