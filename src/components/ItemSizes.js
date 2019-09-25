import React from "react";

const ItemSizes = props => {
  const _SIZES = ["S", "M", "L", "XL", "XXL"];

  const _renderSizes = _ => {
    return _SIZES.map((size, index) => {
      return <SizeBox key={index} size={size} />;
    });
  };

  return <div className={`d-flex justify-content-between ${props.className || ' '}`}>{_renderSizes()}</div>;
};

const SizeBox = props => {
  return (
    <button className="item-size-box item-size-box-selected default-font-size">
      {props.size}
    </button>
  );
};

export default ItemSizes;
