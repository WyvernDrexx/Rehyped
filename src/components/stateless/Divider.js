import React from "react";

const Divider = props => {
  const renderDividerVariant = size => {
    if (typeof size === "undefined")
      return (
        <div className={`w-50 mx-auto divider ${props.className || ""}`}></div>
      );
    else
      return (
        <div className={`w-100 mx-auto divider ${props.className || ""}`}></div>
      );
  };

  return <>{renderDividerVariant(props.size)}</>;
};

export default Divider;
