import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../stateless";
import { useSelector, useDispatch } from "react-redux";
import history from "../../history";
import api from "../../api";
import Loader from "../Loader";
import { showAlert } from "../../actions";
import { PrimaryButton, DarkButton } from "../stateless/Buttons";
const CancelOrder = props => {
  const { orderId } = useParams();
  const token = useSelector(state => state.token);
  const [order, setOrder] = useState({});
  const dispatch = useDispatch();
  const [isRunning, setIsRunning] = useState(true);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [renderSuccess, setRenderSuccess] = useState(false);

  useEffect(
    _ => {
      if (cancelOrder && token.isVerified) {
        const cancelOrderHandler = async _ => {
          setIsRunning(true);
          await api
            .post(
              `/orders/${order.orderId}`,
              {},
              {
                headers: {
                  Authorization: "Bearer " + token.token
                }
              }
            )
            .then(resp => {
              if (resp.data.status === 200) {
                setRenderSuccess(true);                
              } else if (resp.data.status === 600) {
                dispatch(showAlert(resp.data.message, "failure"));
                history.push("/my-account/orders");
              } else {
                dispatch(showAlert(resp.data.message, "failure"));
              }
            })
            .catch(err => {
              dispatch(showAlert("Network Error while connecting!", "failure"));
            });
        };
        cancelOrderHandler();
        
      }
    },
    [cancelOrder, token.token, order.orderId]
  );

  useEffect(
    _ => {
      if (!token.isVerified) {
        return;
      }
      const fetchOrder = async _ => {
        setIsRunning(true);
        await api
          .get(`/orders/${orderId}`, {
            headers: {
              Authorization: "Bearer " + token.token
            }
          })
          .then(resp => {
            if (resp.data.status === 200) {
              setIsRunning(false);
              setOrder(resp.data.order);
              console.log(resp.data.order);
            } else if (resp.data.status === 600) {
              setIsRunning(false);
              history.push("/my-account/orders");
            } else {
              dispatch(showAlert(resp.data.message, "failure"));
            }
          })
          .catch(err => {
            dispatch(showAlert("Network Error while connecting!", "failure"));
          });
      };
      fetchOrder();
    },
    [orderId, token]
  );

  const renderSuccessResponse = _ => {
    return (
      <div className="bg-black pt-6 pb-6">
        <Container>
          <h4 className="default-letter-spacing text-center text-light pt-6">
            YOUR ORDER IS <strong className="text-info">CANCELLED</strong> AND{" "}
            <strong className="text-success">REFUND</strong> IS ON THE WAY!
            <br />
            <span className="primary-color">LETS' GO SHOPPING NOW!</span>
          </h4>
        </Container>
      </div>
    );
  };

  const renderConfirmation = _ => {
    return (
      <Container className="mx-auto pb-5">
        <h4 className="default-letter-spacing text-center text-light pt-6">
          ARE YOU SURE YOU WANT TO{" "}
          <strong className="primary-color">CANCEL</strong> THIS ORDER?
        </h4>
        <div className="w-100 w-md-40 mx-auto mt-5 position-relative">
          <PrimaryButton
            onClick={_ => history.push("/my-account/orders")}
            className="px-4 px-md-5 float-left"
            title="GO BACK"
          />
          <DarkButton
            onClick={_ => setCancelOrder(true)}
            className="px-4 px-md-5 float-right"
            title="CANCEL!"
          />
        </div>
      </Container>
    );
  };

  if (renderSuccess) {
    return renderSuccessResponse();
  }

  return (
    <div className="pt-6 pb-6 bg-black">
      {isRunning ? (
        <div className="pt-6 pb-6">
          <Loader />
        </div>
      ) : (
        renderConfirmation()
      )}
    </div>
  );
};

export default CancelOrder;
