import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./QuadShowcase.scss";

const QuadShowcase = props => {
  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;
  const [currentImage, setCurrentImage] = useState(props.image);
  const [secondaryImages, setSecondaryImages] = useState(props.secondaryImages);

  const onSecondaryImageClick = image => {
    const temp = currentImage;
    setCurrentImage(image);
    setSecondaryImages(
      secondaryImages.map(secImage => {
        if (secImage === image) {
          return temp;
        }
        return secImage;
      })
    );
  };

  useEffect(
    _ => {
      document.getElementById("primary-image").classList.add("slide-fade");
    },
    [currentImage]
  );

  const renderPrimaryImage = _ => {
    return (
      <div className="primary-image-wrapper">
        <img
          alt="This is null"
          id="primary-image"
          src={`${imagesSrc + currentImage}`}
        />
      </div>
    );
  };

  const renderSecondaryImages = _ => {
    if (secondaryImages) {
      return secondaryImages.map((image, index) => {
        if (image === "default.jpg") {
          return (
            <div
              key={index}
              className="secondary-image pt-0 d-inline-block visibility-hidden"
            ></div>
          );
        }

        return (
          <div key={index} className="secondary-image d-inline-block mb-3">
            <img
              onClick={_ => onSecondaryImageClick(image)}
              alt="This is null"
              className=""
              src={`${imagesSrc + image}`}
            />
          </div>
        );
      });
    }

    return null;
  };

  if (props.image) {
    return (
      <>
        <Row className={`quadshowcase`}>
          <Col lg={true} className="primary-image px-0">
            {renderPrimaryImage()}
          </Col>
          <Col md={6} lg={2} className="sm-0 px-0 pl-lg-2">
            {renderSecondaryImages()}
          </Col>
        </Row>
      </>
    );
  }
  return null;
};

export default QuadShowcase;
