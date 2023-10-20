import React from "react";
import "./Navbar.css";
import logo from "../Assets/AF_Logo_W.png";

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
        <li>Videos</li>
        <li>Cart Etc.</li>
      </ul>
    </div>
  );
};

export default Navbar;
