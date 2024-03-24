import React, { useEffect, useState } from "react";
import Banner from "./../../Components/Banner/Banner";
import ShopBanner from "./img/Image.png";
import { Link } from "react-router-dom";
import Card from "./../../Components/Card/Card";
import axios from "axios";

const MainShop = () => {
  let api = "http://localhost:3000/ShopProducts";
  const [CardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get(api).then((card) => {
      setCardData(card.data);
    });
  }, []);

  return (
    <div>
      <Banner title="Shop" img={ShopBanner} />
      <div className="justify-center my-[90px] w-full max-w-[1400px] mx-auto flex flex-wrap gap-[20px]">
        {CardData.map((product, id) => (
          <Link to={product.id} key={id}>
            <Card product={product} id={id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainShop;
