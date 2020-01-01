import { SET_REQUEST_STATUS } from "./types";

export default {
  setRequestStatus: (requestName = "", isRunning = false) => {
    return { type: SET_REQUEST_STATUS, payload: { [requestName]: isRunning } };
  }
};

// Request status true=isRunning , false=isComplete