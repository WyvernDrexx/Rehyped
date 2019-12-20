import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_RELATED,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALERT_SHOW,
  INPUT_CHANGE,
  FORM_SUBMIT,
  REQUEST_STATUS
} from "../actions/types";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

const relatedReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_RELATED:
      return action.payload;
    default:
      return state;
  }
};

const cartReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.payload, ...state];
    case REMOVE_FROM_CART:
      return [...action.payload];
    default:
      return state;
  }
};

const alertReducer = (state = "", action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return action.payload;
    default:
      return state;
  }
};

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, ...action.payload };
    case FORM_SUBMIT:
      return {...state, status:action.payload.status, message: action.payload.message};
    case REQUEST_STATUS:
      return {...state, requestStatus: action.payload};
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  selectedProduct: productReducer,
  relatedItem: relatedReducers,
  cart: cartReducers,
  alert: alertReducer,
  form: formReducer
});
