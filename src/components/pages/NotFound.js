import React from "react";
import "./NotFound.scss";
import { Container } from "../stateless";

export default _ => {
  return (
    <div className="not-found">
      <Container className="not-found-body">
        <p className="message">
          Sorry, The requested page doesn't exist. Kindly return back to
          continue browsing.
        </p>
      </Container>
    </div>
  );
};
