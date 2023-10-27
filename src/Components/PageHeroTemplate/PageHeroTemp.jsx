import React from "react";
import "./pageherotemp.css";

const PageHeroTemp = ({ image, title }) => {
  let imageAlt = title + "background";
  return (
    <div className="page-hero-template">
      <h1 className="pageHeroTitle">{title}</h1>
      <div className="pageHeroOverlay"></div>
      <img src={image} alt={imageAlt} className="pageHeroImg" />
    </div>
  );
};

export default PageHeroTemp;
