import React from "react";
import Banner from "../../Components/Banner/Banner";
import SingleBanner from "./img/Banner Image.jpg";

const Item = () => {
  return (
    <div>
      <Banner title="Shop Single" img={SingleBanner} />
    </div>
  );
};

export default Item;
