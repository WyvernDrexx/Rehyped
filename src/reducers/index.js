import { SET_COOKIE } from "../actions/types";
import { combineReducers } from "redux";

const cookiesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COOKIE:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
export default combineReducers({
  cookies: cookiesReducer
});
