import React from "react";
import "./ItemSizes.scss";
const ItemSizes = props => {
  const _SIZES = ["S", "M", "L", "XL", "XXL"];
  const _renderSizes = _ => {
    return _SIZES.map((size, index) => {
      return (
        <SizeBox
          selectedSize={props.selectedSize}
          onClickFunc={props.onClickFunc}
          key={index}
          size={size}
        />
      );
    });
  };

  return <div className={` ${props.className || " "}`}>{_renderSizes()}</div>;
};

const SizeBox = props => {
  return (
    <button
      onClick={_ => props.onClickFunc("size", props.size)}
      className={`mr-2 item-size-box item-size-box-selected default-font-size ${
        props.selectedSize === props.size
          ? "primary-background-color progress-bar-striped text-light"
          : ""
      }`}
    >
      {props.size}
    </button>
  );
};

export default ItemSizes;
