import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { clearSelected } from "../../actions";
import history from "../../history";
import Loader from '../Loader';
import "./Carousel.scss";

const CarouselItem = props => {
  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;
  const dispatch = useDispatch();
  const onClick = _ => {
    dispatch(clearSelected());
    history.push(`/products/${item.uniqueUrl}`);
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
          <p className="product-name">
            {item.name.length > 23?(item.name.substring(0,20) + "..."): item.name}
            </p>
          <p className="product-price">₹{item.discount}</p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  item: PropTypes.object
}

export default CarouselItem;