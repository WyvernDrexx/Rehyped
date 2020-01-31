import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART } from "./types";

import api from "../api";
import { showAlert, setRequestStatus } from "../actions";

const addToCart = _ => async (dispatch, getState) => {
  const {
    token: { token, isVerified },
    selectedProduct
  } = getState();

  if (!isVerified) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }

  if (!selectedProduct.size || !selectedProduct.color) {
    dispatch(showAlert("Please select the color and size of the product."));
    return;
  }

  dispatch(setRequestStatus("addToCart", true));

  await api
    .post(
      "/cart",
      { selectedProduct },
      {
        headers: {
          Authorization: "Bearer " + token
        },
        method: "POST"
      }
    )
    .then(resp => {
      if (resp.data.status === 200) {
        dispatch(showAlert(resp.data.message, "success"));
        dispatch({
          type: ADD_TO_CART,
          payload: { selectedProduct, status: resp.data.status }
        });
      } else dispatch(showAlert(resp.data.message, "failure"));
    })
    .catch(err => {
      dispatch(showAlert("Network Failure, refresh and try again", "failure"));
    });

  dispatch(setRequestStatus("addToCart"));
};

const fetchCartItems = _ => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

  dispatch(setRequestStatus("fetchCartItems", true));

  if (!token) {
    dispatch({ type: FETCH_CART, payload: [] });
  } else {
    await api
      .get("/cart", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(resp => {
        if (resp.data.status !== 200)
          dispatch(showAlert(resp.data.message, "failure"));
        else dispatch({ type: FETCH_CART, payload: resp.data });
      })
      .catch(err => {
        dispatch(showAlert("Items on cart couldn't be loaded", "failure"));
      });
  }
  dispatch(setRequestStatus("fetchCartItems"));
};

const removeFromCart = uniqueUrl => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

  if (!token)
    dispatch(showAlert("Please login in order to remove.", "failure"));

  dispatch(setRequestStatus("removeFromCart", true));
  await api
    .post(
      "/cart",
      {
        uniqueUrl
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "X-HTTP-Method-Override": "DELETE"
        }
      }
    )
    .then(resp => {
      if (!resp.data.cartItems || resp.data.status !== 200)
        dispatch(showAlert(resp.data.message, "failure"));
      else {
        dispatch({
          type: REMOVE_FROM_CART,
          payload: resp.data.cartItems || []
        });
        dispatch(showAlert(resp.data.message, "success"));
      }
    })
    .catch(err => {
      dispatch(showAlert("Unable to remove item.", "failure"));
    });
  dispatch(setRequestStatus("removeFromCart"));
};

export default { addToCart, removeFromCart, fetchCartItems };
