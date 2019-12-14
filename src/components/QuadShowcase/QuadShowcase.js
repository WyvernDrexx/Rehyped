import React from "react";
import { Col, Row } from "react-bootstrap";
import "./QuadShowcase.scss";

const QuadShowcase = props => {
  if(props.image){
    return (
      <>
        <Row className="quadshowcase">
          <Col lg={true} className="primary-image px-0">
            <img alt="This is null" className="" src={props.image} />
          </Col>
          <Col md={6} lg={4}className="sm-0 px-0 pl-md-2">
            <div  className="secondary-image">
              <img alt="This is null" className="" src={props.image} />
            </div>
            <div  className="secondary-image">
              <img alt="This is null" className="" src={props.image} />
            </div>
            <div  className="secondary-image">
              <img alt="This is null" className="" src={props.image} />
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
        <Col md={6} lg={4}className="sm-0 px-0 pl-md-2">
          <div  className="secondary-image">
            <img alt="This is null" className="" src="/imgs/500x600.jpeg" />
          </div>
          <div  className="secondary-image">
            <img alt="This is null" className="" src="/imgs/500x600.jpeg" />
          </div>
          <div  className="secondary-image">
            <img alt="This is null" className="" src="/imgs/500x600.jpeg" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default QuadShowcase;
