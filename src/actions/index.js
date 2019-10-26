import { ALERT } from "./types";

export const alert = (message = "No Message", type = "normal") => {
  switch (type) {
    case "normal":
      return {
        type: ALERT,
        payload: {
          type: "normal",
          message
        }
      };
    case "success":
      return {
        type: ALERT,
        payload: {
          type: "success",
          message
        }
      };
    case "info":
      return {
        type: ALERT,
        payload: {
          type: "info",
          message
        }
      };
    case "warning":
      return {
        type: ALERT,
        payload: {
          type: "warning",
          message
        }
      };
    case "danger":
      return {
        type: ALERT,
        payload: {
          type: "danger",
          message
        }
      };
  }
};
