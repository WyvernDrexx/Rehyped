import React from "react";

import './Alert.scss';
import Container from '../stateless/Container';

const Alert = props => {
  return (
    <div className="alert-box">
        <Container>
            <p className="message  sub-header">Unable to Login!</p>
        </Container>
    </div>
  );
};

export default Alert;
