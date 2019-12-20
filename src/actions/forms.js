import { INPUT_CHANGE, FORM_SUBMIT, REQUEST_STATUS } from "./types";
import api from "../api";

const onInputChange = target => {
  return { type: INPUT_CHANGE, payload: target };
};

const onFormSubmit = route => async (dispatch, getState) => {
  const { form } = getState();
  dispatch({ type: REQUEST_STATUS, payload: "running" });
  await api
    .post(route, form)
    .then(resp => {
      dispatch({ type: FORM_SUBMIT, payload: resp.data });
    })
    .catch(err =>
      dispatch({ type: "API_ERROR", payload: "Error sending request!" })
    );
  dispatch({ type: REQUEST_STATUS, payload: "complete" });
};

export default {
  onInputChange,
  onFormSubmit
};
