import {
  FETCH_SHIPPING_DETAILS,
  USER_INPUT_CHANGE,
  UPDATE_USER_RESPONSE
} from "./types";
import api from "../api";
import { setRequestStatus, showAlert } from ".";

const fetchShippingDetails = _ => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();

  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }

  dispatch(setRequestStatus("fetchShippingDetails", true));

  await api
    .get("/user/shipping-details", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      if (resp.data.status === 200) {
        dispatch({
          type: FETCH_SHIPPING_DETAILS,
          payload: resp.data.shippingDetails
        });
      }
    })
    .catch(err => {
      dispatch(showAlert("Please try again later."));
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

  if (!token) {
    dispatch(showAlert("Please login to continue.", "failure"));
    return;
  }
  
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
      dispatch({
        type: UPDATE_USER_RESPONSE,
        payload: {
          target,
          message: resp.data.message || "Unable to receive response.",
          status: resp.data.status || 500
        }
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_USER_RESPONSE,
        payload: {
          target,
          message: "Error: Please check your Internet connection!",
          status: 500
        }
      });
    });

  dispatch(setRequestStatus("onUserSubmit"));
};

export default {
  fetchShippingDetails,
  onUserInputChange,
  onUserSubmit
};
