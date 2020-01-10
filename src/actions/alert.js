import { ALERT_SHOW, CLOSE_ALERT } from "./types";

const showAlert = (message, status = "neutral") => (dispatch, getState) => {
  const { alert } = getState();
  if (!alert[0] || alert[0].message !== message) {
    dispatch({ type: ALERT_SHOW, payload: { message, status } });
  }
};

const closeAlert = _ => (dispatch, getState) => {
  const {alert} = getState();
  dispatch({type: CLOSE_ALERT, payload: alert.slice(1,alert.length)});
}

export default {
  showAlert,
  closeAlert
};
