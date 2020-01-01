import React from "react";
import "./CartList.scss";
import { Col, Row } from "react-bootstrap";
import { PrimarySlimButton } from "../stateless/Buttons";
import { useDispatch } from 'react-redux';
import { removeFromCart,showAlert } from "../../actions";
import history from '../../history';

const CartItem = props => {
  const dispatch = useDispatch();
  const { item } = props;

  const onRemoveClick = _ => {
    dispatch(removeFromCart(item.productId));
    dispatch(showAlert("Item Removed Successfully!"));
  }

  return (
    <div className="cart-item">
      <Row md={"true"} className="mx-0 mb-5">
        <Col onClick={_ => history.push(`/products/${item._id}`)} xs={6} className="cursor-pointer flex-center cart-item-image pl-0">
          <img alt="placeholder text" src={`http://localhost:8000/images/products/${item.image}`} />
        </Col>
        <Col className="cart-item-info ml-2">
          <Row className="cart-item-details">
            <Row>
              <Col>
                <h5 className="sub-header text-left font-weight-bold">
                  {item.name}
                </h5>
                <p className="sub-header text-left">
                  <span className="strikethrough pr-2">${item.price}</span>$1800
                </p>
              </Col>
            </Row>
          </Row>
          <Row className="">
            <Col className="px-0">
              <p className="sub-header sm-letter-spacing text-left font-weight-bold">
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
            <PrimarySlimButton
              title="REMOVE"
              className="sub-header pt-2 pb-2"
              onClick={onRemoveClick}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
