import React from "react";
import './SuccessBlock.scss';

const SuccessBlock = props => {
  return (
    <>
      <div className="success-block">
        <p>{props.message}</p>
      </div>
    </>
  );
};

export default SuccessBlock;
