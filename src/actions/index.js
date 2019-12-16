import fetch from './fetch';
import cart from "./cart";

// Fetch related
export const fetchProducts = fetch.products;
export const fetchProduct  = fetch.product;
export const fetchRelated  = fetch.related;

// cart related
export const addToCart     = cart.add;
export const removeFromCart = cart.remove;


