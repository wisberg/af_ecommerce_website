import React from "react";
import "./popular.css";
import all_products from "../Assets/products";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular Products</h1>
      <div className="popular-item">
        {all_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
