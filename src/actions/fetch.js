import { FETCH_PRODUCT, FETCH_PRODUCTS, FETCH_RELATED } from "./types";
import api from "../api";

const products = _ => async dispatch => {
  let products = await api.get("/products");
  products = products.data;
  dispatch({ type: FETCH_PRODUCTS, payload: products });
};

const product = id => async (dispatch, getState) => {
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

const related = _ => async dispatch => {
  let product = await api.get("/related");
  product = product.data;
  dispatch({ type: FETCH_RELATED, payload: product });
};

export default {
  products,
  product,
  related
};
