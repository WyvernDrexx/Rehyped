import { IS_ONLINE } from "./types";

const setIsOnline = _ => (dispatch, getState) => {
  const { isOnline } = getState();
  if (String(isOnline) !== String(navigator.onLine)) {
    dispatch({ type: IS_ONLINE, payload: navigator.onLine });
  }
};

export default {
  setIsOnline
};
