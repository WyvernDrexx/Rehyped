import { ALERT } from "../actions/types";

import { combineReducers } from "redux";

const alertReducer = (state = {}, action) => {
  if (action.type === ALERT) {
    const { message, type } = action.payload;
    return { message, type };
  }
  return state;
};

export default combineReducers({
  alert: alertReducer
});
