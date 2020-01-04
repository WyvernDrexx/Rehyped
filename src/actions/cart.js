import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART } from "./types";

import api from "../api";
import { showAlert, setRequestStatus } from "../actions";

const addToCart = () => async (dispatch, getState) => {
  const {
    token: { token },
    selectedProduct
  } = getState();

  const product = selectedProduct;
  
  dispatch(setRequestStatus("addToCart", true));

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
      if (resp.data.status === 200) {
        dispatch({
          type: ADD_TO_CART,
          payload: { product, status: resp.data.status }
        });
      }
      dispatch(setRequestStatus("addToCart"));
      dispatch(showAlert(resp.data.message));
    })
    .catch(err => {
      dispatch(setRequestStatus("addToCart"));
      dispatch(showAlert("Error: Please try again!"));
    });
  console.log("addtocart");
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
        dispatch({ type: FETCH_CART, payload: resp.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_CART, payload: [] });
      });
  }
  dispatch(setRequestStatus("fetchCartItems"));
};

const removeFromCart = id => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  dispatch(setRequestStatus("removeFromCart", true));
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
  dispatch(setRequestStatus("removeFromCart"));
};

export default { addToCart, removeFromCart, fetchCartItems };
