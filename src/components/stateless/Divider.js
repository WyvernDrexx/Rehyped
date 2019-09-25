import React from "react";

const Divider = props => {
  return (
    <div className={`${props.className || ""}`}>
      {renderDividerVariant(props.size)}
    </div>
  );
};

const renderDividerVariant = size => {
  if (typeof size === "undefined")
    return <div className="w-50 mx-auto divider"></div>;
  else return <div className="w-100 mx-auto divider"></div>;
};

export default Divider;
