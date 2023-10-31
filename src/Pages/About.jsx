import React from "react";
import AboutComponent from "../Components/About/About";
import PageHeroTemp from "../Components/PageHeroTemplate/PageHeroTemp";
import jackJohnson from "../Components/Assets/Backgrounds/jackjohnson.jpeg";
import Newsletter from "../Components/Newsletter/Newsletter";

const About = () => {
  return (
    <div className="aboutPage">
      <PageHeroTemp image={jackJohnson} title="About" />
      <AboutComponent />
      <Newsletter />
    </div>
  );
};

export default About;
