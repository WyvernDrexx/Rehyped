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
  REMOVE_PRODUCT,
  CLEAR_SELECTED,
  FETCH_CART,
  SET_REQUEST_STATUS,
  SET_SELECTED,
  BUY_NOW,
  FETCH_ORDERS,
  PLACE_ORDERS,
  FETCH_SHIPPING_DETAILS,
  USER_INPUT_CHANGE,
  UPDATE_USER_RESPONSE,
  CLOSE_ALERT,
  IS_ONLINE,
  COUPON_CODE_SUCCESS,
  COUPON_CODE_FAILURE,
  CLEAR_CART,
  CLEAR_ORDERS,
  PRODUCTS_END
} from "../actions/types";

const productsReducer = (state = [], action) => {
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
    case SET_SELECTED:
      return { ...state, ...action.payload };
    case CLEAR_SELECTED:
      return {};
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
      if (action.payload.status === 200)
        return [action.payload.product, ...state];
      else return state;
    case REMOVE_FROM_CART:
      return [...action.payload];
    case FETCH_CART:
      if (action.payload.status === 200) {
        return [...action.payload.cartItems];
      } else {
        return state;
      }
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

const alertReducer = (state = [], action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return [...state, action.payload];
    case CLOSE_ALERT:
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

const tokenReducer = (state = { token: { isVerified: null } }, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case GET_TOKEN:
      return { ...state, token: action.payload };
    case VERIFY_TOKEN:
      return { ...state, ...action.payload };
    case REMOVE_TOKEN:
      return {};
    default:
      return state;
  }
};

const requestStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_REQUEST_STATUS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const ordersReducer = (state = {}, action) => {
  switch (action.type) {
    case BUY_NOW:
      return { ...state, buyNow: action.payload };
    case FETCH_ORDERS:
      return { ...state, list: action.payload.orders };
    case PLACE_ORDERS:
      return { list: action.payload, buyNow: {} };
    case CLEAR_ORDERS:
      return {list:[], buyNow: {}};
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SHIPPING_DETAILS:
      return { ...state, shippingDetails: action.payload };
    case USER_INPUT_CHANGE:
      let { target, data } = action.payload;
      const targetPrevData = state[target];
      return {
        ...state,
        [target]: { ...targetPrevData, ...data }
      };
    case UPDATE_USER_RESPONSE:
      let { message, status } = action.payload;
      return {
        ...state,
        [action.payload.target]: {
          ...state[action.payload.target],
          message,
          status
        }
      };
    default:
      return state;
  }
};

const isOnlineReducer = (state = true, action) => {
  switch (action.type) {
    case IS_ONLINE:
      return action.payload;
    default:
      return state;
  }
};

const couponReducer = (state = {}, action) => {
  switch (action.type) {
    case COUPON_CODE_SUCCESS:
      return { coupon: action.payload.coupon, message: action.payload.message };
    case COUPON_CODE_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};

const productsEndReducer = (state=false, action) => {
  switch (action.type) {
    case PRODUCTS_END:
      return true;
    default:
      return state;
  }
}


export default combineReducers({
  products: productsReducer,
  selectedProduct: productReducer,
  relatedItem: relatedReducers,
  cart: cartReducers,
  alert: alertReducer,
  form: formReducer,
  token: tokenReducer,
  requestStatus: requestStatusReducer,
  orders: ordersReducer,
  user: userReducer,
  isOnline: isOnlineReducer,
  coupon: couponReducer,
  productsEnd: productsEndReducer
});
