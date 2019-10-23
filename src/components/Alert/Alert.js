import React, { useState } from "react";
import "./Alert.scss";

import Container from "../stateless/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Alert = props => {
  const [alertDisplay, setAlertDisplay] = useState("");

  const renderAlert = _ => {};

  const onCrossClick = _ => {
    setAlertDisplay(" show-p-false ");
  };

  return (
    <div className="alert-box">
      <Container>
        <p className={`sub-header ${alertDisplay}`}>
          <span onClick={onCrossClick} className="">
            <FontAwesomeIcon icon={faTimes} />
          </span>
          EXTRA 50% OFF!
        </p>
      </Container>
    </div>
  );
};

export default Alert;
