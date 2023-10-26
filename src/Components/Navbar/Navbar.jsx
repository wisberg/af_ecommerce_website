import { React } from "react";
import "./Navbar.css";
import logo from "../Assets/Logos/AF_Logo_W.png";
import SiteMenu from "../Site_Menu/SiteMenu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Antique Fists Logo" id="nav-logo" />
        </Link>
      </div>
      <SiteMenu />
    </div>
  );
};

export default Navbar;
