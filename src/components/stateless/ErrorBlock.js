import React from "react";
import './ErrorBlock.scss';

const ErrorBlock = props => {
  return (
    <>
      <div className="error-block">
        <p>{props.message}</p>
      </div>
    </>
  );
};

export default ErrorBlock;
