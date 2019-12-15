import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_RELATED,
  ADD_TO_CART,
  REMOVE_FROM_CART
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

export default combineReducers({
  products: productsReducer,
  selectedProduct: productReducer,
  relatedItem: relatedReducers,
  cart: cartReducers
});
