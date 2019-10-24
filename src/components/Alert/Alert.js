import React, { useState } from "react";
import "./Alert.scss";

import Container from "../stateless/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

const Alert = props => {
  const [alertDisplay, setAlertDisplay] = useState("");

  const renderAlert = _ => {};

  const onCrossClick = _ => {
    setAlertDisplay(" show-p-false ");
  };

  return (
    <div className="alert-box">
      <Container>
        <Row>
          <Col
            className={`d-flex align-items-center sub-header text-center ${alertDisplay}`}
            onClick={onCrossClick}
            xs={1}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Col>
          <Col>
            <p className={`sub-header text-center ${alertDisplay}`}>
              EXTRA 50% OFF!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Alert;
