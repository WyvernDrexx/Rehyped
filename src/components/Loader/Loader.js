import React from "react";

import "./Loader.scss";

const Loader = ({ variant="light", className = "", align="center",loaderRootClassname="" }) => {

  return (
    <div className={`${className} ${align === "center"?"loader-center-align":""} `}>
      <div className={`loader-root loader-${variant}-variant ${loaderRootClassname}`}>
        <div className="loader-outer loader-outer-animate"></div>
        <div className="loader-inner loader-inner-animate"></div>
      </div>
    </div>
  );
};

export default Loader;
