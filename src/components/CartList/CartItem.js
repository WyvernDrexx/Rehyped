import React, { useState, useEffect } from "react";
import "./CartList.scss";
import { Col, Row } from "react-bootstrap";
import { PrimarySlimButton } from "../stateless/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../actions";
import history from "../../history";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  const [isRemoved, setIsRemoved] = useState(false);
  const isRunning = useSelector((state) => state.requestStatus.removeFromCart);

  useEffect(() => {
    if (isRemoved) {
      setTimeout(() => {
        dispatch(removeFromCart(item.uniqueUrl));
      }, 1000);
    }
  }, [isRemoved, item.uniqueUrl, dispatch]);

  const onRemoveClick = (_) => {
    setIsRemoved(true);
  };

  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;

  return (
    <div className={`cart-item ${isRemoved?("item-fadeout"):""}`}>
      <Row md={"true"} className="mx-0 mb-5">
        <Col
          onClick={(_) => history.push(`/products/${item.uniqueUrl}`)}
          xs={5}
          className="cursor-pointer flex-center cart-item-image pl-0"
        >
          <div className="img-wrapper">
            <img alt="placeholder text" src={`${imagesSrc + item.image}`} />
          </div>
        </Col>
        <Col className="cart-item-info ml-2">
          <Row className="cart-item-details">
            <Col className="px-0">
              <h5 className="sub-header text-left font-weight-bold">
                {item.name}
              </h5>
              <p className="cart-item-price text-left">
                <span className="strikethrough pr-2">₹{item.price}</span>₹
                {item.discount}
              </p>
            </Col>
          </Row>
          <Row className="">
            <Col className="px-0">
              <p className="sub-header sm-letter-spacing text-left font-weight-bold">
                SIZE:<span className="font-weight-normal">{item.size}</span>
              </p>
            </Col>
            <Col>
              <p className="sub-header text-left font-weight-bold">
                QTY:<span className="font-weight-normal">1</span>
              </p>
            </Col>
          </Row>
          <Row className="cart-item-action">
            <PrimarySlimButton
              title="REMOVE"
              className={`sub-header pt-2 pb-2 ${
                isRunning ? "status-running" : ""
              }`}
              onClick={onRemoveClick}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
