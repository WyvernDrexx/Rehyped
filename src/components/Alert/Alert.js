import React from "react";
import { connect } from "react-redux";

import "./Alert.scss";
import Container from "../stateless/Container";

const Alert = props => {

  if (typeof props.alert.message !== "undefined") {
    return (
      <div className={`alert-box alert-show bg-${props.alert.message}`}>
        <Container>
          <p className="message  sub-header">{props.alert.message}</p>
        </Container>
      </div>
    );
  } else {
    return null;
  }
  
};

const mapStateToProps = state => {
  return {
    alert: state.alert
  };
};

export default connect(
  mapStateToProps,
  {}
)(Alert);
