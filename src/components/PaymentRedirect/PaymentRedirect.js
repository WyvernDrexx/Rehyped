import React, { useEffect, useState } from "react";
import qs from "query-string";
import api from "../../api";
import history from '../../history';
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const PaymentRedirect = props => {
  const paymentDetails = qs.parse(props.location.search, {
    ignoreQueryPrefix: true
  });
  const token = useSelector(state => state.token);
  const [isRunning, setIsRunning] = useState(false);

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
          setIsRunning(true);
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
              if(resp.data.status === 200){
                history.push("/orders-succesfull");
              }
            })
            .catch(err => {
              console.log(err);
            });
            setIsRunning(false);
        };
        getPaymentDetails();
      }
    },
    [token.token, paymentDetails, token.isVerified]
  );


  if(!token || isRunning){
    return <Spinner animation="border" className="block-center mt-5 mb-5" />
  }

  return null;
};

export default PaymentRedirect;
