import fetch from "./fetch";
import cart from "./cart";
import forms from "./forms";
import token from "./token";
import requestStatus from "./requestStatus";
import { ALERT_SHOW } from "./types";
import orders from "./orders";
import user from "./user";

export const {
  fetchProduct,
  fetchRelated,
  fetchProducts,
  removeProduct,
  clearSelected,
  setSelected
} = fetch;

export const { addToCart, fetchCartItems, removeFromCart } = cart;

export const showAlert = (message, status="neutral") => {
  return { type: ALERT_SHOW, payload: {message,status} };
};

export const { onInputChange, onFormSubmit, clearForm } = forms;
export const { setToken, getToken, verifyToken, removeToken } = token;
export const { setRequestStatus } = requestStatus;
export const { buyNow, placeOrder, getOrders, placeOrders } = orders;
export const { fetchShippingDetails, onUserInputChange, onUserSubmit } = user;
