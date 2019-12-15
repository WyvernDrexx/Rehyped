import React from "react";
import "./CartList.scss";
import CartItem from "./CartItem";

const CartList = props => {
  const cartItems = props.cartItems;
  if (cartItems && cartItems.length === 0) {
    return (
      <div className="cartList">
        <p className="text-center sub-header">
          YOUR CART IS EMPTY! GO SHOPPING NOW!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="cartList">
        {cartItems.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default CartList;
