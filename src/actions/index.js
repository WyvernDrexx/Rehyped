import fetch from "./fetch";
import cart from "./cart";
import forms from "./forms";
import token from "./token";
import requestStatus from "./requestStatus";
import { ALERT_SHOW } from "./types";
import orders from "./orders";

export const {
  fetchProduct,
  fetchRelated,
  fetchProducts,
  removeProduct,
  clearSelected,
  setSelected
} = fetch;

export const { addToCart, fetchCartItems, removeFromCart } = cart;

export const showAlert = message => {
  return { type: ALERT_SHOW, payload: message };
};

export const { onInputChange, onFormSubmit, clearForm } = forms;
export const { setToken, getToken, verifyToken, removeToken } = token;
export const { setRequestStatus } = requestStatus;
export const { buyNow, placeOrder, getOrders } = orders;
