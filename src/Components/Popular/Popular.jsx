import React from "react";
import "./popular.css";
import all_products from "../Assets/products";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="popular-title">Popular Items</h1>
      <div className="popular-items">
        {all_products.map((item, i) =>
          item.popular === "y" ? (
            <div className="popular-item" key={i}>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ) : null
        )}
      </div>
      <div className="popular-button-container">
        <Link to="/shop">
          <button className="popular-button">View Store</button>
        </Link>
      </div>
    </div>
  );
};

export default Popular;
