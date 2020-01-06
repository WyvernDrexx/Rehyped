import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import "./Alert.scss";
import { showAlert } from "../../actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
// 50 chars allowed
const Alert = props => {
  const { message, status } = useSelector(state => state.alert);
  const [isCrossedClick, setIsCrossedClick] = useState(false);
  const dispatch = useDispatch();

  const isCrossedClickRef = useRef(isCrossedClick);
  isCrossedClickRef.current = isCrossedClick;

  useEffect(
    _ => {
      if (message && message !== "") {
        document.getElementById("alert").classList.add("alert-fadein");
        setIsCrossedClick(false);
        setTimeout(_ => {
          if (!isCrossedClickRef.current) {
            document.getElementById("alert").classList.add("alert-fadeout");
            setTimeout(_ => {
              dispatch(showAlert(""));
              document
                .getElementById("alert")
                .classList.remove("alert-fadeout");
              document.getElementById("alert").classList.remove("alert-fadein");
            }, 500);
          }
        }, 3500);
      }
    },
    [message]
  );

  const renderClassStatus = _ => {
    switch (status) {
      case "neutral":
        return " alert-neutral ";
      case "failure":
        return " alert-failure ";
      case "success":
        return " alert-success ";
      default:
        return "";
    }
  };

  const renderStatusDialog = _ => {
    switch (status) {
      case "neutral":
        return "INFO";
      case "failure":
        return "ERROR";
      case "success":
        return "SUCCESS";
      default:
        return "";
    }
  };

  const onCrossClick = _ => {
    setIsCrossedClick(true);
    document.getElementById("alert").classList.add("alert-fadeout");
    setTimeout(_ => {
      dispatch(showAlert(""));
      document.getElementById("alert").classList.remove("alert-fadeout");
      document.getElementById("alert").classList.remove("alert-fadein");
    }, 500);
  };

  return ReactDOM.createPortal(
    <div id="alert" className={`alert-snackbar  ${renderClassStatus()}`}>
      <Col>
        <Row>
          <Col className="">
            <Row>
              <span>{renderStatusDialog()}</span>
            </Row>
            <Row>
              <p className="">{message ? message : "NULL"}</p>
            </Row>
          </Col>
          <Col
            onClick={onCrossClick}
            xs={1}
            className="flex-center justify-content-end cursor-pointer alert-close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </Col>
        </Row>
      </Col>
    </div>,
    document.getElementById("alert-root")
  );
};

export default Alert;
