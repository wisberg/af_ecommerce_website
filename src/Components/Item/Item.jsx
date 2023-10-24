import React from "react";
import "./item.css";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Item = (props) => {
  return (
    <div className="item">
      <img className="item-image" src={props.image} alt="" />
      <div className="item-info">
        <p className="item-name">{props.name}</p>
        <div className="item-price">${props.price}</div>
      </div>
    </div>
  );
};

export default Item;

{
  /* <div className="item-buttons">
  <button className="add-to-cart">
    Add to Cart <AiOutlineShoppingCart />
  </button>
  <button className="view-item">
    View More <AiOutlineSearch />
  </button>
</div>; */
}
