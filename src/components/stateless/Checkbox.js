import React from "react";

import './Checkbox.scss'

const Checkbox = props => {
  return (
    <label className="checkbox-container w-100 w-md-40">
      <p>{ props.content || "Placeholder text" }</p>
      <input {...props } type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;