import React, { useEffect, useState } from "react";
import Banner from "./../../Components/Banner/Banner";
import ShopBanner from "./img/Image.png";
import axios from "axios";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";

const MainShop = () => {
  const [ShopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/ShopProducts")
      .then(function (response) {
        // success
        // console.log(response.data);
        setShopProducts(response.data);
        ``;
      })
      .catch(function (err) {
        // error
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Banner title="Shop" img={ShopBanner} />
      <div className="justify-center my-[90px] w-full max-w-[1400px] mx-auto flex flex-wrap gap-[20px]">
        {ShopProducts.map((product, id) => (
          <Link to={product.id} key={id}>
            <Card product={product} id={id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainShop;
