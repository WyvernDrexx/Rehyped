import React, { useEffect } from "react";

import "./SlideShow.scss";
import { Container } from "../stateless";

const SlideShow = props => {
  var slideIndex = 1;

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  const showSlides = n => {
    console.log("hit");
    var i;
    var slides = document.getElementsByClassName("slide-image");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  useEffect(_ => {
    showSlides(slideIndex);
  }, []);

  return (
    <Container className="mt-5">
      <div className="slideshow-container">
        <div className="slide-image slide-fade">
          <img src="/imgs/wide1.jpg" alt="Slide Number 1" />
        </div>
        <div className="slide-image slide-fade">
          <img src="/imgs/wide2.jpg" alt="Slide Number 1" />
        </div>
        <div className="slide-image slide-fade">
          <img src="/imgs/wide3.jpg" alt="Slide Number 1" />
        </div>
        <span onClick={_ => plusSlides(1)} className="next">
          &#10095;
        </span>
        <span onClick={_ => plusSlides(-1)} className="prev">
          &#10094;
        </span>
        <div className="text-center the-dots">
          <span className="dot" onClick={_ => currentSlide(1)}></span>
          <span className="dot" onClick={_ => currentSlide(2)}></span>
          <span className="dot" onClick={_ => currentSlide(3)}></span>
        </div>
      </div>
    </Container>
  );
};

export default SlideShow;
