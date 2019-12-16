import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "./types";

const add = product => {
  return { type: ADD_TO_CART, payload: product };
};

const remove = id => (dispatch, getState) => {
  const { cart } = getState();
  let newCart = cart.filter(item => item.productId !== id);
  dispatch({ type: REMOVE_FROM_CART, payload: newCart });
};

export default { add, remove }