import { FETCH_SHIPPING_DETAILS, USER_INPUT_CHANGE } from "./types";
import api from "../api";
import { setRequestStatus, showAlert } from ".";

const fetchShippingDetails = _ => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  dispatch(setRequestStatus("fetchShippingDetails", true));
  await api
    .get("/user/shipping-details", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      console.log(resp.data);
      if (resp.data.status === 200) {
        dispatch({
          type: FETCH_SHIPPING_DETAILS,
          payload: resp.data.shippingDetails
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
    dispatch(setRequestStatus("fetchShippingDetails"));
};

const onUserInputChange = (target, data) => {
  return {
    type: USER_INPUT_CHANGE,
    payload: {
      target,
      data
    }
  };
};

const onUserSubmit = (target, route) => async (dispatch, getState) => {
  const { user } = getState();
  const data = user[target];
  const {
    token: { token }
  } = getState();
  dispatch(setRequestStatus("onUserSubmit", true));
  await api
    .post(
      route,
      { ...data },
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(resp => {
      dispatch(showAlert(resp.data.message));
    })
    .catch(err => {
      dispatch(showAlert("Network Error: Check your Internet Connection!"));
    });
    dispatch(setRequestStatus("onUserSubmit"));
};

export default {
  fetchShippingDetails,
  onUserInputChange,
  onUserSubmit
};
