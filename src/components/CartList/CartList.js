import React from "react";
import "./CartList.scss";
import CartItem from "./CartItem";

const CartList = props => {
  const cartItems = props.cartItems;
  
  if (cartItems && cartItems.length === 0) {
    return (
      <div className="cart-list">
        <p className="text-center sub-header mb-5">
          YOUR CART IS EMPTY! GO SHOPPING NOW!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="cart-list">
        {cartItems.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default CartList;
