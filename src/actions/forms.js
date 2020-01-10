import { INPUT_CHANGE, FORM_SUBMIT, CLEAR_FORM } from "./types";

import api from "../api";
import { setRequestStatus, showAlert } from "../actions";

const onInputChange = target => {
  return { type: INPUT_CHANGE, payload: target };
};

const onFormSubmit = route => async (dispatch, getState) => {
  const {
    form,
    token: { token }
  } = getState();
  dispatch(setRequestStatus("onFormSubmit", true));
  await api
    .post(route, form, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      dispatch({ type: FORM_SUBMIT, payload: resp.data });
    })
    .catch(err => {
      dispatch(showAlert("Unable to send request."));
      dispatch({
        type: "API_ERROR",
        payload: "Error sending request. Please check your Internet Connection."
      });
    });
  dispatch(setRequestStatus("onFormSubmit"));
};

const clearForm = _ => {
  return { type: CLEAR_FORM };
};

export default {
  onInputChange,
  onFormSubmit,
  clearForm
};
