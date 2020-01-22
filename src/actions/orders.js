import {
  BUY_NOW,
  ORDER_SUCCESS,
  FETCH_ORDERS,
  PLACE_ORDERS,
  REMOVE_FROM_CART
} from "./types";
import history from "../history";
import api from "../api";
import { showAlert, setRequestStatus } from ".";

const buyNow = product => (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }

  if (!product.size || !product.color) {
    dispatch(
      showAlert(
        "Please select the color and size of the product you are ordering."
      )
    );
    return;
  }
  history.push("/buy-product");
  dispatch({ type: BUY_NOW, payload: product });
};

const placeOrder = _ => async (dispatch, getState) => {
  const {
    orders: {
      buyNow: { _id, size, color }
    },
    token: { token }
  } = getState();

  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }
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
      if (resp.data.status === 200) {
        dispatch(showAlert(resp.data.message, "success"));
        window.location = resp.data.message;
        dispatch({ type: ORDER_SUCCESS });
      } else if (resp.data.status === 406) {
        dispatch(showAlert(resp.data.message, "failure"));
        history.push("/my-account/shipping-details");
      }
    })
    .catch(err => {
      dispatch(showAlert("Please try again later."));
      history.push("/products");
    });
  dispatch(setRequestStatus("placeOrder"));
};

const getOrders = _ => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  dispatch(setRequestStatus("getOrders", true));
  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }
  await api
    .get("/orders", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      if (resp.data.status !== 200)
        dispatch(showAlert(resp.data.message, "failure"));
      else dispatch({ type: FETCH_ORDERS, payload: resp.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ORDERS, payload: { status: 400 } });
    });
  dispatch(setRequestStatus("getOrders"));
};

const placeOrders = _ => async (dispatch, getState) => {
  const {
    cart,
    token: { token }
  } = getState();

  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }

  if (!cart || cart.length === 0) {
    dispatch(
      showAlert("Your Cart is empty! Please add some items in order to buy.")
    );
    return;
  }

  dispatch(setRequestStatus("placeOrders", true));
  await api
    .post(
      "/orders/all",
      { cart },
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
        dispatch({ type: PLACE_ORDERS, payload: resp.data.orders });
        dispatch({ type: REMOVE_FROM_CART, payload: [] });
      } else if (resp.data.status === 406) {
        dispatch(showAlert(resp.data.message));
        history.push("/my-account/shipping-details");
      }
    })
    .catch(err => {
      dispatch(showAlert("Error, please check your internet connection."));
    });
  dispatch(setRequestStatus("placeOrders"));
};

export default {
  buyNow,
  placeOrder,
  getOrders,
  placeOrders
};
