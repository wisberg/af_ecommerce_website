import React from "react";
import { Link } from "react-router-dom";
import "./SiteMenu.css";

const SiteMenu = () => {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>Videos</li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/shop" className="link">
            Shop
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/login" className="buttonLink">
            Login{" "}
          </Link>
        </button>
        <div className="cart">
          <Link to="/cart" className="link">
            Cart<span className="bracket">(</span>0
            <span className="bracket">)</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SiteMenu;
