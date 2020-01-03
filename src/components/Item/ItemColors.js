import React from "react";
import "./ItemColors.scss";

const ItemColor = props => {
  const colors = ["black", "pink"];

  return (
    <div className={props.className || ""}>
      {colors.map((color, index) => {
        return <Color selectedColor={props.selectedColor} onClick={props.onClickFunc} key={index} color={color} />;
      })}
    </div>
  );
};

const Color = props => {
  return (
    <button
      onClick={_ => props.onClick("color", props.color)}
      className={`item-color mr-2 ${props.selectedColor === props.color?"progress-bar-striped":""}`}
      style={{ backgroundColor: props.color }}
    ></button>
  );
};

export default ItemColor;
