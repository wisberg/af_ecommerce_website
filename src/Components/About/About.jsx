import React from "react";
import Logo from "../Assets/Logos/AF_Logo_W.png";
import AliFrazier from "../Assets/Posters/AliFrazier.jpg";
import Louis from "../Assets/Posters/LouisSchmeling.jpeg";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={Logo} alt="Antique Fists Logo" className="about-logo" />
        <h1 className="about-title">About Antique Fists</h1>
        <p>
          In the dimly lit arenas and smoky corners of history, legends emerged
          with fists of thunder and hearts of gold. At Antique Fists, we pay
          homage to the giants of the squared circle—boxers who transcended
          their era, leaving an indelible mark on the world of pugilism.
        </p>
        <button className="shop-button">See Apparel</button>
      </div>
      <div className="about-right">
        <img
          src={Louis}
          alt="Joe Louis vs. Max Schmeling Poster"
          className="image_1"
        />
        <img
          src={AliFrazier}
          alt="Muhammad Ali vs. Joe Frazier Poster"
          className="image_2"
        />
      </div>
    </div>
  );
};

export default About;
