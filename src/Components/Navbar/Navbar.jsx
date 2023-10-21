import {React} from "react";
import "./Navbar.css";
import logo from "../Assets/AF_Logo_W.png";
import { Link } from "react-router-dom";


export const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Antique Fists Logo" id="nav-logo"></img>
      </div>
      <ul className="nav-menu">
        <li><Link to='/' className = "link">Home</Link></li>
        <li>Videos</li>
        <li><Link to='/about' className = "link">About</Link></li>
        <li><Link to='/shop' className = "link">Shop</Link></li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to = '/login' className = "buttonLink">Login </Link></button>
        <div className = "cart"><Link to ='/cart' className = "link">Cart<span className = "bracket">(</span>0<span className = "bracket">)</span></Link></div>
      </div>
    </div>
  );
};

export default Navbar;
