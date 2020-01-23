import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import "./Alert.scss";
import { closeAlert } from "../../actions";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";

const Alert = props => {
  const alerts = useSelector(state => state.alert);
  const [messageState, setMessageState] = useState({
    message: "Welcome!",
    status: "neutral",
    dialog: "INFO"
  });
  const [alertState, setAlertState] = useState("");
  const [isAlertRunning, setIsAlertRunning] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    _ => {
      if (alerts && alerts.length > 0 && !isAlertRunning) {
        setTimeout(_ => {
          setMessageState(alerts[0]);
          setAlertState("alert-fadein");
          setIsAlertRunning(true);
        }, 300);
        setTimeout(_ => {
          setIsAlertRunning(false);
          setAlertState("alert-fadeout");
          dispatch(closeAlert());
        }, 3900);
      }
    },
    [alerts, dispatch]
  );

  const renderClassStatus = status => {
    switch (status) {
      case "neutral":
        return " alert-neutral ";
      case "failure":
        return " alert-failure ";
      case "success":
        return " alert-success ";
      default:
        return "alert-neutral";
    }
  };


  return ReactDOM.createPortal(
    <div
      id="alert"
      className={`alert-snackbar ${renderClassStatus(
        messageState.status
      )} ${alertState}`}
    >
      <Col>
        <Row>
          <Col className="">
            <Row>
              <p className="">{messageState.message}</p>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>,
    document.getElementById("alert-root")
  );
};

export default Alert;
