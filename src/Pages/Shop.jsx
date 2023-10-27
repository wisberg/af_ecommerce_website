import React from "react";
import Popular from "../Components/Popular/Popular";
import PageHeroTemp from "../Components/PageHeroTemplate/PageHeroTemp";
import sugarRay from "../Components/Assets/Backgrounds/sugarrayrobinson.jpeg";

const Shop = () => {
  return (
    <div className="shop">
      <PageHeroTemp image={sugarRay} title="Shop" />
      <Popular />
    </div>
  );
};

export default Shop;
