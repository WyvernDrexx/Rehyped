import api from "../api";
import { showAlert } from ".";
import { COUPON_CODE_SUCCESS, COUPON_CODE_FAILURE } from "./types";

const validateCoupon = code => async (dispatch, getState) => {
  const {
    token: { token }
  } = getState();
  if (!code || code.length === 0) {
    dispatch(showAlert("Please provide a coupon code to validate."));
    return;
  }

  await api
    .post(
      "/coupon/validate",
      { code },
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(resp => {
      if(resp.data.status === 200){
        dispatch({
          type: COUPON_CODE_SUCCESS,
          payload: {coupon:resp.data.coupon, message: resp.data.message}
        });
      }else{
        dispatch({
          type: COUPON_CODE_FAILURE,
          payload: resp.data.message
        });
      }
    })
    .catch(err => {
    });
};

export default {
  validateCoupon
};
