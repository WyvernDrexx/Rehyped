import React from "react";
import { Container, ErrorBlock, SuccessBlock } from "../stateless";
import { DarkButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";
import history from "../../history";

const UnauthorizedError = props => {
  const message = props.message || "PLEASE LOGIN TO CONTINUE";
  const to = props.to || "/login";
  const isVerified = props.isVerified;
  const redirectTo = _ => {
    history.push("/");
  };
  if (!isVerified) {
    return (
      <Container className="mt-6 mb-5">
        <ErrorBlock message={message} />
        <Link to={to}>
          <DarkButton title="GO TO LOGIN" className="d-block mx-auto mt-5" />
        </Link>
      </Container>
    );
  } else {
    return (
      <Container className="mt-6 mb-5">
        <SuccessBlock message={message} />
        <Link to={to}>
          <DarkButton title="RETURN HOME?" className="d-block mx-auto mt-5" />
          {redirectTo()}
        </Link>
      </Container>
    );
  }
};

export default UnauthorizedError;
