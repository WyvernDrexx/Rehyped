import fetch from './fetch';
import cart from "./cart";
import { ALERT_SHOW } from './types';
import forms from './forms';
import token from "./token";


export const { fetchProduct, fetchRelated, fetchProducts, removeProduct } = fetch;
export const addToCart     = cart.add;
export const removeFromCart = cart.remove;

export const showAlert = message => {
  return { type: ALERT_SHOW, payload: message };
}

export const { onInputChange, onFormSubmit, clearForm } = forms;
export const { setToken, getToken, verifyToken, removeToken } = token;
