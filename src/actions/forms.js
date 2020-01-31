import { INPUT_CHANGE, FORM_SUBMIT, CLEAR_FORM } from "./types";

import api from "../api";
import { setRequestStatus, showAlert } from "../actions";

const onInputChange = target => {
  return { type: INPUT_CHANGE, payload: target };
};

const onFormSubmit = (route, onSuccess) => async (dispatch, getState) => {
  const {
    form,
    token: { token }
  } = getState();
  dispatch(setRequestStatus("onFormSubmit", true));
  onSuccess = onSuccess || (() => {});
  await api
    .post(route, form, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      dispatch({ type: FORM_SUBMIT, payload: resp.data });
      if (resp.data.status && resp.data.status === 200) {
        onSuccess();
      }
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

const clearForm = _ => (dispatch, getState) => {
  const { form } = getState();
  Object.keys(form).forEach(k => form[k] = "");
  console.log("clearForm", form);
  dispatch({ type: CLEAR_FORM, payload: form });
};

export default {
  onInputChange,
  onFormSubmit,
  clearForm
};
