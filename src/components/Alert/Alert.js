import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import "./Alert.scss";
import { showAlert } from "../../actions";
import { useDispatch } from "react-redux";
// 50 chars allowed
const Alert = props => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  useEffect(
    _ => {
      if (alert && alert.length !== 0) {
        document.getElementById("alert").classList.add("alert-animate");
        setTimeout(_ => {
          document.getElementById("alert").classList.remove("alert-animate");
          dispatch(showAlert(""));
        }, 2000);
      }
    },
    [alert]
  );
  return ReactDOM.createPortal(
    <div id="alert" className="alert-snackbar">
      <p className="text-center">{alert ? alert : "NULL"}</p>
    </div>,
    document.getElementById("alert-root")
  );
};

export default Alert;
