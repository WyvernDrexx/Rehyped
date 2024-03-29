import { BUY_NOW, ORDER_SUCCESS, FETCH_ORDERS } from "./types";
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
    dispatch(showAlert("Please select the size for the product."));
    return;
  }
  history.push("/buy-product");
  dispatch({ type: BUY_NOW, payload: product });
};

const placeOrders = _ => async (dispatch, getState) => {
  const {
    cart,
    token: { token },
    coupon: { coupon }
  } = getState();

  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }

  if (!cart || cart.length === 0) {
    dispatch(showAlert("Your Cart is empty! Please add some items."));
    return;
  }

  dispatch(setRequestStatus("placeOrders", true));
  await api
    .post(
      "/orders",
      { cart, coupon },
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(resp => {
      if (resp.data.status === 200) {
        dispatch(
          showAlert(
            "You will be redirected to our payment gateway portal shortly.",
            "success"
          )
        );
        setTimeout(_ => {
          window.location = resp.data.message;
        }, 3500);
      } else if (resp.data.status === 406) {
        dispatch(showAlert(resp.data.message));
        history.push("/my-account/shipping-details");
      } else {
        dispatch(showAlert(resp.data.message, "failure"));
      }
    })
    .catch(err => {
      dispatch(showAlert("Error, please check your internet connection."));
    });
  dispatch(setRequestStatus("placeOrders"));
};

const placeOrder = _ => async (dispatch, getState) => {
  const {
    orders: {
      buyNow: { uniqueUrl, size, color }
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
      { cart: [{ uniqueUrl, size, color }] },
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(resp => {
      if (resp.data.status === 200) {
        dispatch(
          showAlert(
            "You will be redirected to our payment gateway portal shortly. Complete the payment to get the order",
            "success"
          )
        );
        setTimeout(_ => {
          window.location = resp.data.message;
        }, 4500);
        dispatch({ type: ORDER_SUCCESS });
      } else if (resp.data.status === 406) {
        dispatch(showAlert(resp.data.message, "failure"));
        history.push("/my-account/shipping-details");
      } else {
        dispatch(showAlert(resp.data.message, "failure"));
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

export default {
  buyNow,
  placeOrder,
  getOrders,
  placeOrders
};
