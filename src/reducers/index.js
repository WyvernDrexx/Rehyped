import { combineReducers } from "redux";
import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions/types';

const productsReducer = (state={}, action) => {
  switch(action.type){
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

const productReducer = (state={}, action) => {
  switch(action.type){
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  products: productsReducer,
  selectedProduct: productReducer
});
