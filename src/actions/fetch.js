import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_RELATED,
  REMOVE_PRODUCT,
  CLEAR_SELECTED,
  SET_SELECTED,
  PRODUCTS_END
} from "./types";
import api from "../api";
import { showAlert, setRequestStatus } from ".";
import history from "../history";

const fetchProducts = (param = "") => async dispatch => {
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

const fetchProduct = uniqueUrl => async (dispatch, getState) => {
  const { products } = getState();
  let product;
  if (
    Object.values(products).length > 0 &&
    Object.values(products).length < 100
  ) {
    product = products.filter(elem => elem.uniqueUrl === uniqueUrl)[0];
    if (!product) {
      await api
        .get(`/products/${uniqueUrl}`)
        .then(resp => {
          if (resp.data[0]) {
            product = resp.data[0];
          } else if (resp.data.message && resp.data.status !== 200) {
            history.push("/products");

            dispatch(showAlert(resp.data.message, "failure"));
          }
        })
        .catch(err => {});
    }
  } else {
    await api
      .get(`/products/${uniqueUrl}`)
      .then(resp => {
        if (resp.data[0]) {
          product = resp.data[0];
        } else if (resp.data.message && resp.data.status !== 200) {
          history.push("/products");
          dispatch(showAlert(resp.data.message, "failure"));
        }
      })
      .catch(err => {});
  }

  dispatch({ type: FETCH_PRODUCT, payload: product || [] });
};
const fetchRelated = _ => async dispatch => {
  await api
    .get("/products/related/get")
    .then(resp => {
      if (!resp.data || resp.data.status) {
        dispatch(showAlert(resp.message, "failure"));
      } else {
        dispatch({ type: FETCH_RELATED, payload: resp.data });
      }
    })
    .catch(err => {
      dispatch(showAlert("Unable to send request try again later.", "failure"));
    });
};

const removeProduct = id => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }

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

const fetchMore = (slot = 1, tag="all") => async (dispatch, getState) => {
  dispatch(setRequestStatus("fetchMore", true));
  const {products} = getState();
  await api
    .get(`/products/more/${slot}/${tag}`)
    .then(resp => {
      if (resp.data.status && resp.data.status === 200) {
        if ( typeof resp.data.end !== "undefined") {
          dispatch({ type: PRODUCTS_END, payload: resp.data.end});
        }
        if(slot > 1){
          dispatch({
            type: FETCH_PRODUCTS,
            payload: [...products,...resp.data.products]
          });
        }else{
          dispatch({
            type: FETCH_PRODUCTS,
            payload: [...resp.data.products]
          });
        }
        
      } else {
        dispatch(showAlert(resp.data.message, "failure"));
      }
    })
    .catch(err => {
      dispatch(showAlert("Unable to send requests."));
    });
  dispatch(setRequestStatus("fetchMore"));
};

const sendRequest = (method, url, data = {}) => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }
  dispatch(setRequestStatus("productAction", true));
  await api
    .get(url, {
      method,
      data,
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      if (resp.data.message && resp.data.status !== 200) {
        dispatch(showAlert(resp.data.message, "failure"));
      } else {
        dispatch(showAlert(resp.data.message, "success"));
      }
    })
    .catch(_ => {
      dispatch(showAlert("Unable to send requests!", "failure"));
    });
  dispatch(setRequestStatus("productAction"));
};

export default {
  removeProduct,
  fetchProduct,
  fetchProducts,
  fetchRelated,
  clearSelected,
  setSelected,
  fetchMore,
  sendRequest
};
