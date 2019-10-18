import React from "react";
import "./CartList.scss";
import CartItem from "./CartItem";

const CartList = props => {
  return (
    <div className="cart-list">
      <CartItem />
      <CartItem />
      {/* <CartItem />
      <CartItem /> */}
    </div>
  );
};

export default CartList;
