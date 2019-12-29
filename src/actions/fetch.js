import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_RELATED,
  REMOVE_PRODUCT,
  CLEAR_SELECTED
} from "./types";
import api from "../api";

const fetchProducts = _ => async dispatch => {
  let products = await api.get("/products");
  products = products.data;
  dispatch({ type: FETCH_PRODUCTS, payload: products });
};

const fetchProduct = id => async (dispatch, getState) => {
  const { products } = getState();
  let product;
  if (
    Object.values(products).length > 0 &&
    Object.values(products).length < 100
  ) {
    product = products.filter(elem => elem.productId === id)[0];
    if (!product) {
      product = await api.get(`/products/${id}`);
      product = product.data[0];
    }
  } else {
    product = await api.get(`/products/${id}`);
    product = product.data[0];
  }

  if (!product) {
    product = {
      error: "Product not found!"
    };
  }
  dispatch({ type: FETCH_PRODUCT, payload: product });
};

const fetchRelated = _ => async dispatch => {
  let product = await api.get("/products/related/get");
  product = product.data;
  dispatch({ type: FETCH_RELATED, payload: product });
};

const removeProduct = id => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

  await api
    .post(
      "/products/remove",
      { id },
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(resp => {
      dispatch({ type: REMOVE_PRODUCT, payload: resp.data });
    })
    .catch(err => {
    });
};

export const clearSelected = _ => {
  return {
    type: CLEAR_SELECTED
  }
}

export default {
  removeProduct,
  fetchProduct,
  fetchProducts,
  fetchRelated,
  clearSelected
};
