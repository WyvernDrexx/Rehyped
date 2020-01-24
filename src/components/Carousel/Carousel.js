import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelated, clearSelected } from "../../actions";
import history from "../../history";
import Loader from '../Loader';
import "./Carousel.scss";

const Carousel = props => {
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

const CarouselItem = props => {
  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;
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
      <div className="item">
        <div className="position-relative" onLoad={onLoad}>
          {isImgLoaded ? null : (
            <Loader className="absolute-center" />
          )}
          <img
            onLoad={onImgLoad}
            alt="Placeholder"
            className={`carousel-img ${isLoaded ? "" : "visibility-hidden"}`}
            src={`${imagesSrc + item.image}`}
          />
        </div>
        <div
          className={`product-details ${isLoaded ? "" : "visibility-hidden"}`}
        >
          <p className="product-name">{item.name}</p>
          <p className="product-price">₹{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
