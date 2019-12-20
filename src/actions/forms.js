import { INPUT_CHANGE, CREATE_ACCOUNT_SUBMIT, REQUEST_STATUS } from "./types";
import api from "../api";

const onInputChange = event => {
  return { type: INPUT_CHANGE, payload: event };
};

const onCreateAccountFormSubmit = _ => async (dispatch, getState) => {
  const { createAccountForm } = getState();
  dispatch({ type: REQUEST_STATUS, payload: "running" });

  await api
    .post("/signup", createAccountForm)
    .then(resp => {
      dispatch({ type: CREATE_ACCOUNT_SUBMIT, payload: resp.data });
    })
    .catch(err =>
      dispatch({ type: "API_ERROR", payload: "Error sending request!" })
    );
  dispatch({ type: REQUEST_STATUS, payload: "complete" });
};

export default {
  onInputChange,
  onCreateAccountFormSubmit
};
