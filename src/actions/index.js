import fetch from './fetch';
import cart from "./cart";
import { ALERT_SHOW } from './types';
// Fetch related
export const fetchProducts = fetch.products;
export const fetchProduct  = fetch.product;
export const fetchRelated  = fetch.related;

// cart related
export const addToCart     = cart.add;
export const removeFromCart = cart.remove;

export const showAlert = message => {
  return { type: ALERT_SHOW, payload: message };
}


