import React from "react";
import "./Orders.scss";
import { Col, Row } from "react-bootstrap";
import { PrimarySlimButton } from "../stateless/Buttons";
import {useSelector } from "react-redux";
import history from "../../history";

const CartItem = props => {
  const { item } = props;
  const isRunning = useSelector(state => state.requestStatus.removeFromCart);

  const baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

  return (
    <div className="cart-item">
      <Row md={"true"} className="mx-0 mb-5">
        <Col
          onClick={_ => history.push(`/products/${item._id}`)}
          xs={6}
          className="cursor-pointer flex-center cart-item-image pl-0"
        >
          <img
            alt="placeholder text"
            src={`${baseURL}/images/products/${item.image}`}
          />
        </Col>
        <Col className="cart-item-info">
          <Row className="cart-item-details">
            <Row>
              <Col>
                <h5 className="sub-header text-left font-weight-bold">
                  {item.name}
                </h5>
                <p className="sub-header text-left">
                  <span className="strikethrough pr-2">₹{item.price}</span>₹{item.discount}
                </p>
              </Col>
            </Row>
          </Row>
          <Row className="">
            <Col className="px-0">
              <p className="sub-header sm-letter-spacing text-left font-weight-bold">
                SIZE:<span className="font-weight-normal">{item.size}</span>
              </p>
            </Col>
            <Col className="px-0">
              <p className="sub-header text-left font-weight-bold">
                QTY:<span className="font-weight-normal">1</span>
              </p>
            </Col>
          </Row>
          <Row className="cart-item-action">
            <PrimarySlimButton
              title="TRACK"
              tooltip="Comming Soon!"
              className={`sub-header pointer-disabled pt-2 pb-2 w-100 mr-3 ${
                isRunning ? "status-running" : ""
              }`}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
