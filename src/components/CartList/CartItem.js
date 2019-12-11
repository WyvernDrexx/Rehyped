import React from "react";
import "./CartList.scss";
import { Col, Row } from "react-bootstrap";
import { PrimarySlimButton } from "../stateless/Buttons";

const CartItem = props => {
  return (
    <div className="cart-item">
      <Row md={true}  className= "mx-0 mb-5">
        <Col xs={6} className="flex-center cart-item-image pl-0">
          <img alt="placeholder text" src="/imgs/500x600.jpeg" />
        </Col>
        <Col className="cart-item-info ml-2">
          <Row className="cart-item-details">
            <Row>
              <Col>
                <h5 className="sub-header text-left font-weight-bold">
                  Lorem ipsum, dolor sit amet
                </h5>
                <p className="sub-header text-left">
                  <span className="strikethrough pr-2">$100</span>$80
                </p>
              </Col>
            </Row>
          </Row>
          <Row className="">
            <Col className="px-0">
              <p className="sub-header text-left font-weight-bold">
                SIZE:<span className="font-weight-normal">M</span>
              </p>
            </Col>
            <Col>
              <p className="sub-header text-left font-weight-bold">
                QTY:<span className="font-weight-normal">1</span>
              </p>
            </Col>
          </Row>
          <Row className="cart-item-action">
            <PrimarySlimButton title="REMOVE" className="sub-header" />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
