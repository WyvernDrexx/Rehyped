import React from "react";
import Button from "react-bootstrap/Button";

const onButtonClick = callback => {
  if (typeof callback === "function") {
    return callback();
  }
  return;
};

export const DarkButton = props => {
  return (
    <Button
      onClick={_ => onButtonClick(props.onClick)}
      className={`no-radius  button-default  bg-black ${props.className || ""}`}
      variant="dark"
    >
      {props.title || "Dark Button"}
    </Button>
  );
};

export const LightButton = props => {
  return (
    <Button
      onClick={_ => onButtonClick(props.onClick)}
      className={`no-radius  button-default  light-button ${props.className ||
        ""}`}
      variant="light"
    >
      {props.title || "Light Button"}
    </Button>
  );
};

export const PrimaryButton = props => {
  return (
    <Button
      onClick={_ => onButtonClick(props.onClick)}
      className={`no-radius  button-default  primary-background-color text-light ${props.className ||
        ""}`}
      variant="light"
      type={props.type || ""}
    >
      {props.title || "Primary Button"}
      {props.children}
    </Button>
  );
};

export const PrimarySlimButton = props => {
  return (
    <Button
      onClick={_ => onButtonClick(props.onClick)}
      className={`no-radius button-default  primary-background-color text-light ${props.className ||
        ""}`}
      title={props.tooltip || ""}
      variant="light"
    >
      {props.title || "Primary Button"}
    </Button>
  );
};

//To center a button horizontally use class: 'mx-auto d-block'
