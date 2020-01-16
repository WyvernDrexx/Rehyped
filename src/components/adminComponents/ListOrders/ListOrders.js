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

  if (!token.isAdmin) {
    return null;
  }
  return (
    <Container className="mt-5 mb-5">
      {
        orders.map((item,index) => {
          return <OrderItem key={index} item={item} />
        })
      }
    </Container>
  );
};

export default ListOrders;
