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
            <img className="h-100 w-100" src="/imgs/square.jpg" />
          </Col>
          <Col>
            <Row className="secondary-image">
              <img className="h-100 w-100" src="/imgs/square.jpg" />
            </Row>
            <Row className="secondary-image">
              <img className="h-100 w-100" src="/imgs/square.jpg" />
            </Row>
            <Row className="secondary-image">
              <img className="h-100 w-100" src="/imgs/square.jpg" />
            </Row>
          </Col>
        </Row>
      </div>
      <div className='mt-5'>
        <p className='sub-header font-weight-bold text-left'>
          TOKYO GHOUL Ken Kaneki - Anime
          <br /> Full Sleeves T-Shirt
        </p>
        <p className='mt-4 mr-4'><span className='strikethrough sub-header mr-4'>$500</span><span className='sub-header'>$200</span></p>
      </div>
    </>
  );
};

export default QuadShowcase;
