import { IS_ONLINE, CLEAR_CART, CLEAR_ORDERS } from "./types";
import { removeToken } from "./";

const setIsOnline = _ => (dispatch, getState) => {
  const { isOnline } = getState();
  if (String(isOnline) !== String(navigator.onLine)) {
    dispatch({ type: IS_ONLINE, payload: navigator.onLine });
  }
};

const onLogout = _ => (dispatch) => {
  dispatch(removeToken());
  dispatch({type: CLEAR_CART});
  dispatch({type: CLEAR_ORDERS});
}

export default {
  setIsOnline,
  onLogout
};
