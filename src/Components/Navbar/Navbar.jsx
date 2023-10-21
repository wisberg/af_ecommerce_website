import {React} from "react";
import "./Navbar.css";
import logo from "../Assets/AF_Logo_W.png";



export const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Antique Fists Logo" id="nav-logo"></img>
      </div>
      <ul className="nav-menu">
        <li>About</li>
        <li>Videos</li>
        <li>Home</li>
        <li>Shop</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <div className = "cart">Cart<span className = "bracket">(</span>0<span className = "bracket">)</span></div>
      </div>
    </div>
  );
};

export default Navbar;
