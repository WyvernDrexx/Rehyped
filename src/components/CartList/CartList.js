import React from "react";
import "./CartList.scss";
import CartItem from "./CartItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
        <TransitionGroup>
          {cartItems.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="item"
              >
                <CartItem item={item} key={index} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </>
  );
};

export default CartList;
