import React from "react";
import './styles/ItemColors.scss'

const ItemColor = props => {
  const colors = ["black", "pink"];
  return (
    <div className={props.className || ''}>
      {colors.map((color, index) => {
        return <Color key={index} color={color} />;
      })}
    </div>
  );
};

const Color = props => {
  return <button className='item-color mr-2' style={{ backgroundColor: props.color }}></button>;
};

export default ItemColor;
