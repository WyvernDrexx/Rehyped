import React from "react";

import './Checkbox.scss'

const Checkbox = props => {
  return (
    <label class="checkbox-container w-100 w-md-40">
      <p>{ props.content || "Placeholder text" }</p>
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  );
};

export default Checkbox;