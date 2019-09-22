import {} from "../actions/types";
import { combineReducers } from "redux";

const changeMe = _ => {
  return 41;
};

export default combineReducers({
  changeme: changeMe
});
