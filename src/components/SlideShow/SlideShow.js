import React, { useEffect } from "react";

import "./SlideShow.scss";
import { Container } from "../stateless";

const SlideShow = props => {
  var slideIndex = 1;

  // Next/previous controls
  function plusSlides(n = 1) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  const showSlides = n => {
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
    if(!slides[slideIndex -1]) return;
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    setTimeout(_ => {
      plusSlides(1);
    }, 2500)
  };

  useEffect(_ => {
    showSlides(slideIndex);
  }, []);

  return (
    <div className="px-0">
      <div className="slideshow-container">
        <div
          style={{
            background: `url(${"/imgs/wide0.jpg"}) no-repeat center center `
          }}
          className="slide-image slide-fade"
        ></div>
        <div
          style={{
            background: `url(${"/imgs/wide1.jpg"}) no-repeat center center`
          }}
          className="slide-image slide-fade"
        ></div>
        <div
          style={{
            background: `url(${"/imgs/wide2.jpg"}) no-repeat center center`
          }}
          className="slide-image slide-fade"
        ></div>
        <div className="text-center the-dots">
          <span className="dot" onClick={_ => currentSlide(1)}></span>
          <span className="dot" onClick={_ => currentSlide(2)}></span>
          <span className="dot" onClick={_ => currentSlide(3)}></span>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
