import React from 'react';
import OrderItem from './OrderItem';

import './Orders.scss';

const Orders = props => {

  const orders = props.orders || [];

  if(!orders || orders.length === 0){
    return (
      <div>
        No orders placed! Go shopping now!
      </div>
    );
  }

  const renderList = _ => {
    return orders.map((item, index) => {
      return (
        <OrderItem item={item} key={index} />
      );
    })
  }


  return (
    <div className={`cartList ${props.className}`}>
      {renderList()}
    </div>
  );
}

export default Orders;