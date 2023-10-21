import React from "react";
import "./Navbar.css";
import logo from "../Assets/AF_Logo_W.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>Home</li>
        <li>Shop</li>
      </ul>
      <div className="nav-logo">
        <img src={logo} alt="Antique Fists Logo" id="nav-logo"></img>
      </div>
      <ul className="nav-menu">
        <li>About</li>
        <li>Videos</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <IconContext.Provider
          value={{ color: "white", className: "shopping-cart-icon" }}
        >
          <AiOutlineShoppingCart value={{ color: "white" }} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Navbar;
