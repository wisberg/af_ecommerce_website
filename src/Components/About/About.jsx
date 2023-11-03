import React from "react";
import Logo from "../Assets/Logos/AF_Logo_W.png";
import AliFrazier from "../Assets/Posters/AliFrazier.jpg";
import Louis from "../Assets/Posters/LouisSchmeling.jpeg";
import Hearns from "../Assets/Posters/HearnsLeonard.webp";
import Liston from "../Assets/Posters/ListonClay.webp";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h2 className="small-title">About Us</h2>
        <h1 className="about-title">Antique Fists</h1>
        <p>
          In the dimly lit arenas and smoky corners of history, legends emerged
          with fists of thunder and hearts of gold. At Antique Fists, we pay
          homage to the giants of the squared circle—boxers who transcended
          their era, leaving an indelible mark on the world of pugilism.
        </p>
        <button className="shop-button">
          <Link className="link" style={{ color: "black" }} to="/shop">
            See Apparel
          </Link>
        </button>
      </div>
      <div className="about-images">
        <img
          src={AliFrazier}
          alt="Joe Louis vs. Max Schmeling Poster"
          className="about-image"
        />
        <img
          src={Louis}
          alt="Muhammad Ali vs. Joe Frazier Poster"
          className="about-image"
        />
        <img
          src={Hearns}
          alt="Muhammad Ali vs. Joe Frazier Poster"
          className="about-image"
        />
        <img
          src={Liston}
          alt="Muhammad Ali vs. Joe Frazier Poster"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default About;
