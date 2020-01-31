import React, { useEffect, useState } from "react";
import { Container } from "../../stateless";
import { showAlert } from "../../../actions";
import "./ListOrders.scss";
import api from "../../../api";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "./OrderItem";

const ListOrders = props => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  
  useEffect(
    _ => {
      const fetchOrders = async _ => {
        if (token.isAdmin) {
          await api
            .get("/orders/totalrecall", {
              headers: {
                Authorization: "Bearer " + token.token
              }
            })
            .then(resp => {
              if (resp.data.status === 200) {
                setOrders(resp.data.orders);
              } else {
                dispatch(showAlert("Unable to retrieve orders.", "failure"));
              }
            })
            .catch(err => {
              dispatch(showAlert("Unable to send request.", "failure"));
            });
        }
      };
      fetchOrders();
    },
    [token.isAdmin, token.token]
  );

  const onProductDeliveredClick = async id => {
    await api
      .post(
        "/orders/totalrecall/delivered",
        { _id: id },
        {
          headers: {
            Authorization: "Bearer " + token.token
          }
        }
      )
      .then(resp => {
        if(resp.data.status === 200){
          dispatch(showAlert("Item is now DELIVERED.", "success"));
          const newOrders = orders.map(item => {
            if(item._id === resp.data.item._id){
              return { ...item, ...resp.data.item };
            }
            return item;
          });
          setOrders(newOrders);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!token.isAdmin) {
    return null;
  }
  return (
    <Container className="mt-5 mb-5">
      {orders.map((item, index) => {
        return (
          <OrderItem
            onProductDelivered={onProductDeliveredClick}
            key={index}
            item={item}
          />
        );
      })}
    </Container>
  );
};

export default ListOrders;
