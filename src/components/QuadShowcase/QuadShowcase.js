import React from "react";
import { Col, Row } from "react-bootstrap";
import "./QuadShowcase.scss";

const QuadShowcase = props => {
  return (
    <>
      <Row className="quadshowcase">
        <Col lg={true} className="primary-image">
          <img className="" src="/imgs/500x600.jpeg" />
        </Col>
        <Col md={6} lg={4}className="sm-0">
          <div  className="secondary-image">
            <img className="" src="/imgs/500x600.jpeg" />
          </div>
          <div  className="secondary-image">
            <img className="" src="/imgs/500x600.jpeg" />
          </div>
          <div  className="secondary-image">
            <img className="" src="/imgs/500x600.jpeg" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default QuadShowcase;
