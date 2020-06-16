import { SET_TOKEN, REMOVE_TOKEN, GET_TOKEN, VERIFY_TOKEN } from "./types";
// import cookies from "../utils/Cookies";
import api from "../api";

const setToken = (token, options) => {
  // cookies.set("token", String(token), options);
  localStorage.setItem("token", String(token));
  return { type: SET_TOKEN, payload: token };
};

const getToken = _ => {
  // const token = cookies.get("token");
  let token = localStorage.getItem("token");
  return { type: GET_TOKEN, payload: token };
};

const verifyToken = _ => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  await api
    .post(
      "/verify-token",
      {},
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(resp => {
      dispatch({ type: VERIFY_TOKEN, payload: resp.data });
    })
    .catch(err => {});
};

const removeToken = _ => {
  // cookies.remove("token");
  localStorage.removeItem("token");
  return { type: REMOVE_TOKEN};
}

export default {
  setToken,
  getToken,
  verifyToken,
  removeToken
};
