import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import "./QuadShowcase.scss";

const QuadShowcase = props => {
  const [divIsLoaded, setDivIsLoaded] = useState(false);
  const divIsMounted = _ => {
    setDivIsLoaded(true);
  };

  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;

  useEffect(
    _ => {
      if (divIsLoaded) {
        window.scrollTo(0, 90);
      }
    },
    [divIsLoaded]
  );

  if (props.image) {
    return (
      <>
        {divIsLoaded ? null : (
          <Spinner className="absolute-center" animation="border" />
        )}
        <Row
          onLoad={divIsMounted}
          className={`quadshowcase ${divIsLoaded ? "" : "visibility-hidden"}`}
        >
          <Col lg={true} className="primary-image px-0">
            <img
              alt="This is null"
              className=""
              src={`${imagesSrc + props.image}`}
            />
          </Col>
          <Col md={6} lg={4} className="sm-0 px-0 pl-md-2">
            <div className="secondary-image">
              <img
                alt="This is null"
                className=""
                src={
                  `${imagesSrc + props.image}`
                }
              />
            </div>
            <div className="secondary-image">
              <img
                alt="This is null"
                className=""
                src={
                  `${imagesSrc + props.image}`
                }
              />
            </div>
            <div className="secondary-image">
              <img
                alt="This is null"
                className=""
                src={
                  `${imagesSrc + props.image}`
                }
              />
            </div>
          </Col>
        </Row>
      </>
    );
  }
  return (
    <>
      <Row className="quadshowcase">
        <Col lg={true} className="primary-image px-0">
          <img alt="This is null" className="" src="/imgs/500x600.jpeg" />
        </Col>
        <Col md={6} lg={4} className="sm-0 px-0 pl-md-2">
          <div className="secondary-image">
            <img alt="This is null" className="" src="/imgs/500x600.jpeg" />
          </div>
          <div className="secondary-image">
            <img alt="This is null" className="" src="/imgs/500x600.jpeg" />
          </div>
          <div className="secondary-image">
            <img alt="This is null" className="" src="/imgs/500x600.jpeg" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default QuadShowcase;
