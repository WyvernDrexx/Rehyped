import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_RELATED,
  REMOVE_PRODUCT,
  CLEAR_SELECTED,
  SET_SELECTED
} from "./types";
import api from "../api";
import { showAlert, setRequestStatus } from ".";

const fetchProducts = _ => async dispatch => {
  await api
    .get("/products")
    .then(resp => {
      if (resp.data.status !== 200) {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: { message: resp.data.message }
        });
      } else dispatch({ type: FETCH_PRODUCTS, payload: resp.data.products });
    })
    .catch(err => {
      dispatch(
        showAlert(
          "Unable to perform request. Check your internet connection.",
          "failure"
        )
      );
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          message: "Please check your internet connection, or try again later."
        }
      });
    });
};

const fetchProduct = id => async (dispatch, getState) => {
  const { products } = getState();
  let product;
  if (
    Object.values(products).length > 0 &&
    Object.values(products).length < 100
  ) {
    product = products.filter(elem => elem._id === id)[0];
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
  if(product)
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
    .catch(err => {});
};

const setSelected = data => {
  return { type: SET_SELECTED, payload: data };
};

const clearSelected = _ => {
  return {
    type: CLEAR_SELECTED
  };
};

const fetchMore = (slot = 1) => async (dispatch, getState) => {
  let { products } = getState();
  dispatch(setRequestStatus("fetchMore", true));
  await api
    .get(`/products/more/${slot}`)
    .then(resp => {
      if (resp.data.status && resp.data.status === 200) {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: [...products, ...resp.data.products]
        });
      } else {
        dispatch(showAlert(resp.data.message, "failure"));
      }
    })
    .catch(err => {
      dispatch(showAlert("Unable to send requests."));
    });
  dispatch(setRequestStatus("fetchMore"));
};

export default {
  removeProduct,
  fetchProduct,
  fetchProducts,
  fetchRelated,
  clearSelected,
  setSelected,
  fetchMore
};
