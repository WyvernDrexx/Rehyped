import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_RELATED,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "./types";

import api from "../api";

export const fetchProducts = _ => async dispatch => {
  let products = await api.get("/products");
  products = products.data;
  dispatch({ type: FETCH_PRODUCTS, payload: products });
};

export const fetchProduct = id => async (dispatch, getState) => {
  const { products } = getState();
  let product;
  if (
    Object.values(products).length > 0 &&
    Object.values(products).length < 100
  ) {
    product = products.filter(elem => elem.productId === id)[0];
    if (!product) {
      product = await api.get(`/products?productId=${id}`);
      product = product.data[0];
    }
  } else {
    product = await api.get(`/products?productId=${id}`);
    product = product.data[0];
  }

  if (!product) {
    product = {
      error: "Product not found!"
    };
  }

  dispatch({ type: FETCH_PRODUCT, payload: product });
};

export const fetchRelated = _ => async (dispatch, getState) => {
  let product = await api.get("/related");
  product = product.data;
  dispatch({ type: FETCH_RELATED, payload: product });
};

export const addToCart = product => {
  return { type: ADD_TO_CART, payload: product };
};

export const removeFromCart = id => (dispatch, getState) => {
  const { cart } = getState();
  console.log(`cart: ${cart} id: ${id}`);
  let newCart = cart.filter(item => item.productId !== id);
  console.log(newCart);
  dispatch({ type: REMOVE_FROM_CART, payload: newCart });
};
