import { React } from "react";
import "./Navbar.css";
import logo from "../Assets/AF_Logo_W.png";
import SiteMenu from "../Site_Menu/SiteMenu";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Antique Fists Logo" id="nav-logo"></img>
      </div>
      <SiteMenu />
    </div>
  );
};

export default Navbar;
