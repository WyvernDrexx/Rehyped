import React, { useEffect } from "react";
import OrderItem from "./OrderItem";

import "./Orders.scss";

const Orders = props => {
  const orders = props.orders || [];

  useEffect(_ => {
    window.scrollTo({
      top: 205,
      left:0,
      behavior: "smooth"
    });
  });

  if (!orders || orders.length === 0) {
    return (
      <div className="mt-3 mb-3">
        <p className="sub-header text-center">
          NO ORDERS PLACED CURRENTLY! GO SHOPPING NOW!
        </p>
      </div>
    );
  }

  const renderList = _ => {
    return orders.map((item, index) => {
      return <OrderItem item={item} key={index} />;
    });
  };

  return <div className={`cartList ${props.className}`}>{renderList()}</div>;
};

export default Orders;
