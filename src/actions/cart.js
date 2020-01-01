import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

import api from "../api";
import { showAlert } from "../actions";

const add = product => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  await api
    .post(
      "/cart/add",
      { product },
      {
        headers: {
          Authorization: "Bearer " + token
        }
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

const remove = id => (dispatch, getState) => {
  const { cart } = getState();
  let newCart = cart.filter(item => item.productId !== id);
  dispatch({ type: REMOVE_FROM_CART, payload: newCart });
};

export default { add, remove };
