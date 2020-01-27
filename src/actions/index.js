import fetch from "./fetch";
import cart from "./cart";
import forms from "./forms";
import token from "./token";
import requestStatus from "./requestStatus";
import orders from "./orders";
import user from "./user";
import alert from "./alert";
import misc from "./misc";
import coupons from './coupon';

export const {
  fetchProduct,
  fetchRelated,
  fetchProducts,
  removeProduct,
  clearSelected,
  setSelected,
  fetchMore,
  sendRequest
} = fetch;
export const { showAlert, closeAlert } = alert;
export const { addToCart, fetchCartItems, removeFromCart } = cart;
export const { onInputChange, onFormSubmit, clearForm } = forms;
export const { setToken, getToken, verifyToken, removeToken } = token;
export const { setRequestStatus } = requestStatus;
export const { buyNow, placeOrder, getOrders, placeOrders } = orders;
export const { fetchShippingDetails, onUserInputChange, onUserSubmit } = user;
export const { setIsOnline } = misc;
export const { validateCoupon } = coupons;