import React, { useEffect } from "react";
import "./ItemColors.scss";

const ItemColor = (props) => {
  const colors = props.colors || ["black", "white"];

  useEffect(() => {
    props.selectColor("color", colors[0]);
  }, [colors]);

  return (
    <div className={props.className || ""}>
      {colors.map((color, index) => {
        return (
          <Color
            selectedColor={props.selectedColor}
            onClick={props.selectColor}
            key={index}
            color={color}
          />
        );
      })}
    </div>
  );
};

const Color = (props) => {
  return (
    <button
      onClick={(_) => props.onClick("color", props.color)}
      className={`item-color mr-2 ${
        props.selectedColor === props.color
          ? "item-selected"
          : "item-unselected"
      }`}
      style={{ backgroundColor: props.color }}
    ></button>
  );
};

export default ItemColor;
