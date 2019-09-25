import React from "react";
import { Carousel } from "react-bootstrap";

const SlideCarousel = props => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/minions.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/minions.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/minions.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideCarousel;
