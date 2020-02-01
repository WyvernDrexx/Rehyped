import React from "react";
import "./Orders.scss";
import { Col, Row } from "react-bootstrap";
import { PrimarySlimButton } from "../stateless/Buttons";
import {useSelector } from "react-redux";
import history from "../../history";

const CartItem = props => {
  const { item } = props;
  const isRunning = useSelector(state => state.requestStatus.removeFromCart);

  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;

  return (
    <div className="order-item">
      <Row md={"true"} className="mx-0 mb-5">
        <Col
          onClick={_ => history.push(`/products/${item.uniqueUrl}`)}
          xs={6}
          className="cursor-pointer flex-center order-item-image pl-0"
        >
          <div className="img-wrapper">
          <img
            alt="placeholder text"
            src={`${imagesSrc + item.image}`}
          />
          </div>
        </Col>
        <Col className="order-item-info ml-2">
          <Row className="order-item-details">
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
          <Row className="order-item-action">
            <PrimarySlimButton
            onClick={_ => history.push("/order/cancel/" + item.orderId)}
              title="CANCEL"
              className={`sub-header pt-2 pb-2 w-100 mr-3 ${
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
