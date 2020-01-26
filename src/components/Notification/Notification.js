import React from "react";
import ReactDOM from "react-dom";
import "./Notification.scss";

const Notification = ({message="No message!"}) => {
  return ReactDOM.createPortal(
    <div className="notification-root">
      <div id="notification-body" className="notification">
        <div id="notification-main" className="notification-main">
        </div>
        <p id="notification-message">{message}</p>
      </div>
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
