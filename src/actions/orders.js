import { BUY_NOW, ORDER_SUCCESS, FETCH_ORDERS } from "./types";
import history from "../history";
import api from "../api";
import { showAlert, setRequestStatus } from ".";

const buyNow = product => {
  history.push("/buy-product");
  return { type: BUY_NOW, payload: product };
};

const placeOrder = _ => async (dispatch, getState) => {
  const {
    orders: {
      buyNow: { _id, size, color }
    },
    token: { token }
  } = getState();

  dispatch(setRequestStatus("placeOrder", true));

  await api
    .post(
      "/orders",
      { _id, size, color },
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(resp => {
      dispatch(showAlert(resp.data.message));
      if (resp.data.status === 200) {
        history.push("/orders-succesfull");
        dispatch({ type: ORDER_SUCCESS });
      }
    })
    .catch(resp => {
      dispatch(showAlert(resp.data.message));
      history.push("/products");
    });
  dispatch(setRequestStatus("placeOrder"));
};

const getOrders = _ => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  dispatch(setRequestStatus("getOrders", true));
  await api
    .get("/orders", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      dispatch({ type: FETCH_ORDERS, payload: resp.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ORDERS, payload: { status: 400 } });
    });
  dispatch(setRequestStatus("getOrders"));
};

const placeOrders = _ => async (dispatch, getState) => {

  const { cart } = getState();
  if(!cart || cart.length === 0){
    return;
  }
  await api.post("/orders")

}

export default {
  buyNow,
  placeOrder,
  getOrders
};
