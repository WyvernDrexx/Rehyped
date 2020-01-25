import React, { useEffect, useState } from "react";
import qs from "query-string";
import api from "../../api";
import history from "../../history";
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "../../actions";
import OrderComplete from "../OrdersComplete";
import Loader from "../Loader";

const PaymentRedirect = props => {
  const paymentDetails = qs.parse(props.location.search, {
    ignoreQueryPrefix: true
  });
  const token = useSelector(state => state.token);
  const [paymentStatus, setPaymentStatus] = useState({ status: "Pending" });
  const dispatch = useDispatch();
  useEffect(
    _ => {
      if (!token.isVerified) {
        return;
      }
      if (
        paymentDetails &&
        paymentDetails.payment_id &&
        paymentDetails.payment_status &&
        paymentDetails.payment_request_id
      ) {
        const getPaymentDetails = async _ => {
          await api
            .post(
              "/payment/getstatus",
              { paymentDetails },
              {
                headers: {
                  Authorization: "Bearer " + token.token
                }
              }
            )
            .then(resp => {
              if (resp.data.status === 200) {
                setPaymentStatus({ status: "success" });
                // history.push("/orders-succesfull");
              } else {
                dispatch(showAlert(resp.data.message, "failure"));
                history.push("/my-account/");
              }
            })
            .catch(err => {
              console.log(err);
            });
        };
        getPaymentDetails();
      }
    },
    [token.token, paymentDetails, token.isVerified]
  );

  if (paymentStatus.status === "success") {
    return (
      <div>
        <OrderComplete />
      </div>
    );
  }
  if (token.token === null) {
    return (
      <div>
        <Loader className="block-center mt-5 mb-5" />
      </div>
    );
  }

  if (!token.token) {
    return (
      <p className="header mt-5 mb-5">Please login to check your payment.</p>
    );
  }

  if (Object.keys(paymentDetails).length === 0) {
    return <>{history.push("/products")}</>;
  }

  return <Loader className="block-center mt-5 mb-5" />;
};

export default PaymentRedirect;
