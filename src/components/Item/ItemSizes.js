import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ItemSizes.scss";
import { setSelected } from "../../actions";

const ItemSizes = props => {
  const _SIZES = props.sizes ||  ["S", "M", "L", "XL", "XXL"];
  const dispatch = useDispatch();
  const selectedSize = useSelector(state => state.selectedProduct.size);
  const _renderSizes = _ => {
    return _SIZES.map((size, index) => {
      return (
        <SizeBox
          selectedSize={selectedSize}
          onClickFunc={(name, value) =>
            dispatch(setSelected({ [name]: value }))
          }
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
