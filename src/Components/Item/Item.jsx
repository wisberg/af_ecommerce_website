import React from "react";
import "./item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img className="item-image" src={props.image} alt="" />
      <p className="item-name">{props.name}</p>
      <div className="item-price">${props.price}</div>
      <div className="item-buttons">
        <button className="add-to-cart">Add to Cart</button>
        <button className="view-item">View More</button>
      </div>
    </div>
  );
};

export default Item;
