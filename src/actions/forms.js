import { INPUT_CHANGE, FORM_SUBMIT, REQUEST_STATUS, CLEAR_FORM } from "./types";
import api from "../api";

const onInputChange = target => {
  return { type: INPUT_CHANGE, payload: target };
};

const onFormSubmit = route => async (dispatch, getState) => {
  const {
    form,
    token: { token }
  } = getState();
  dispatch({ type: REQUEST_STATUS, payload: "running" });
  await api
    .post(route, form, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(resp => {
      dispatch({ type: FORM_SUBMIT, payload: resp.data });
    })
    .catch(err =>
      dispatch({ type: "API_ERROR", payload: "Error sending request!" })
    );
  dispatch({ type: REQUEST_STATUS, payload: "complete" });
};

const clearForm = _ => {
  return { type: CLEAR_FORM };
};

export default {
  onInputChange,
  onFormSubmit,
  clearForm
};
