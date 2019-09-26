import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "./stateless/Container";
import "./styles/QuadShowcase.scss";

const QuadShowcase = props => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row className="quadshowcase">
          <Col className="primary-image pl-0" xs={9}>
            <img className="h-100 w-100" src="/imgs/minions.jpg" />
          </Col>
          <Col>
            <Row className="secondary-image">
              <img className="h-100 w-100" src="/imgs/minions.jpg" />
            </Row>
            <Row className="secondary-image">
              <img className="h-100 w-100" src="/imgs/minions.jpg" />
            </Row>
            <Row className="secondary-image">
              <img className="h-100 w-100" src="/imgs/minions.jpg" />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default QuadShowcase;
