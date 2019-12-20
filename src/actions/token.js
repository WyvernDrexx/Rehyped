import { SET_TOKEN, REMOVE_TOKEN, GET_TOKEN, VERIFY_TOKEN } from "./types";
import cookies from "../utils/Cookies";
import api from "../api";

const setToken = token => {
  cookies.remove("token");
  cookies.set("token", token);
  return { type: SET_TOKEN, payload: token };
};

const getToken = _ => {
  const token = cookies.get("token");
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
    .catch(err => console.log(err));
};

const removeToken = _ => {
  cookies.remove("token");
  return { type: REMOVE_TOKEN};
}

export default {
  setToken,
  getToken,
  verifyToken,
  removeToken
};
