import React from "react";
import "./styles/Carousel.scss";

const Carousel = props => {
  return (
    <div className="carousel-custom">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </div>
  );
};

const CarouselItem = props => {
  return (
    <div className="item">
      <div>
        <img alt='Placeholder' className="carousel-img" src="/imgs/minions.jpg" />
      </div>
      <div className="product-details">
        <p className="product-name">MINIONS HOODIE</p>
        <p className="product-price strikethrough">$500</p>
      </div>
    </div>
  );
};

export default Carousel;
