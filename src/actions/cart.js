import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART } from "./types";

import api from "../api";
import { showAlert } from "../actions";

const addToCart = product => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  await api
    .post(
      "/cart",
      { product },
      {
        headers: {
          Authorization: "Bearer " + token
        },
        method: "POST"
      }
    )
    .then(resp => {
      dispatch({
        type: ADD_TO_CART,
        payload: { product, status: resp.data.status }
      });
      dispatch(showAlert(resp.data.message));
    })
    .catch(err => {
      dispatch(showAlert("Error: Please try again!"));
    });
};

const fetchCartItems = _ => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

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
        dispatch({ type: FETCH_CART, payload: resp.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_CART, payload: [] });
      });
  }
};

const removeFromCart = id => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

  await api
    .post(
      "/cart",
      {
        id
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "X-HTTP-Method-Override": "DELETE"
        }
      }
    )
    .then(resp => {
      dispatch({ type: REMOVE_FROM_CART, payload: resp.data.cartItems || [] });
      dispatch(showAlert(resp.data.message || "Error Removing Item"));
    })
    .catch(err => {
      dispatch(showAlert("Error Removing Item!"));
    });
};

export default { addToCart, removeFromCart, fetchCartItems };
