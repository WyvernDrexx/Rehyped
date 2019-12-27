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
  REQUEST_STATUS,
  SET_TOKEN,
  GET_TOKEN,
  REMOVE_TOKEN,
  VERIFY_TOKEN,
  CLEAR_FORM,
  REMOVE_PRODUCT
} from "../actions/types";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case REMOVE_PRODUCT:
      return action.payload.products;
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
const INITIAL_FORM_STATE = _ => {
  return {
    stock: 10,
    category: "shirt"
  };
};

const formReducer = (state = INITIAL_FORM_STATE(), action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, ...action.payload };
    case FORM_SUBMIT:
      return { ...state, ...action.payload };
    case REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    case CLEAR_FORM:
      return {};
    default:
      return state;
  }
};

const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case GET_TOKEN:
      return { ...state, token: action.payload };
    case VERIFY_TOKEN:
      return { ...state, ...action.payload };
    case REMOVE_TOKEN:
      return { token: "" };
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
  form: formReducer,
  token: tokenReducer,
});
