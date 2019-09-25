import React from "react";

const CommonHeader = props => {

  const renderHeader = _ => {
    if (typeof props.header !== "undefined")
      return <h4 className="header">{props.header || ""}</h4>;
  };

  const renderSubHeader = _ => {
    if (typeof props.subheader !== "undefined")
      return <p className="sub-header">{props.subheader || ""}</p>;
  };

  return (
    <div className={props.className || ''}>
      {renderHeader()}
      {renderSubHeader()}
    </div>
  );
};

export default CommonHeader;
