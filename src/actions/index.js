import { FETCH_PRODUCTS, FETCH_PRODUCT } from "./types";
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
    if(!product){
      product = await api.get(`/products?productId=${id}`);
      product = product.data[0];
    }
  }else{
    product = await api.get(`/products?productId=${id}`);
    product = product.data[0];
  }

  if(!product){
    product = {
      error: "Product not found!"
    }
  }

  dispatch({ type: FETCH_PRODUCT, payload: product });
};
