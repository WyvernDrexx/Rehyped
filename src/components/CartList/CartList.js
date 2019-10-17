import React from "react";
import "./CartList.scss";
import CartItem from "./CartItem";
import {Col} from 'react-bootstrap';

const CartList = props => {
  return (
    <div className="cart-list">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartList;
