import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles/TriShowcase.scss";

const TriShowcase = props => {
  return (
    <div className={`flex-center ${props.className || ""}`}>
      <Row className="tri-showcase">
        <Col
          style={{ backgroundImage: 'url("/imgs/minions.jpg")' }}
          className="tri-primary"
        ></Col>
        <Col className="tri-secondary">
          <Row
            style={{ backgroundImage: 'url("/imgs/minions.jpg")' }}
            className="tri-sec-item"
          ></Row>
          <Row
            style={{ backgroundImage: 'url("/imgs/minions.jpg")' }}
            className="tri-sec-item"
          ></Row>
        </Col>
      </Row>
    </div>
  );
};

export default TriShowcase;
