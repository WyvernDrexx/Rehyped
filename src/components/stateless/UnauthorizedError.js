import React from "react";
import { ErrorBlock, SuccessBlock } from "../stateless";
import { DarkButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";
import history from "../../history";

const UnauthorizedError = props => {
  const message = props.message || "PLEASE LOGIN TO CONTINUE";
  const to = props.to || "/login";
  const isVerified = props.isVerified;
  const redirectTo = _ => {
    history.push(props.to || "/");
  };
  if (!isVerified) {
    return (
      <div className="pt-6 bg-black pb-3">
        <div className="w-75 w-md-40 mx-auto bg-white pt-4 pb-4 px-3 border-radius-sm">
          <ErrorBlock className="w-100 d-block mx-auto" message={message} />
          <Link to={to}>
            <DarkButton title="GO TO LOGIN" className="w-100 d-block mx-auto mt-5 mb-3 " />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pt-5 pb-5">
        <SuccessBlock message={message} />
        <Link to={to}>
          <DarkButton title="RETURN HOME?" className="d-block mx-auto mt-5" />
          {redirectTo()}
        </Link>
      </div>
    );
  }
};

export default UnauthorizedError;
