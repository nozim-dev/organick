import React from "react";
import Banner from "./../../Components/Banner/Banner";
import ShopBanner from "./img/Image.png";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Card from "./../../Components/Card/Card";
let api = "http://localhost:3000/ShopProducts";

const MainShop = () => {
  const result = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>loading....</h1>;
  }

  return (
    <div>
      <Banner title="Shop" img={ShopBanner} />
      <div className="justify-center my-[90px] w-full max-w-[1400px] mx-auto flex flex-wrap gap-[20px]">
        {result.map((product, id) => (
          <Link to={`${product.id}`} key={id}>
            <Card product={product} id={id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainShop;

export const dataLoader = async () => {
  const res = await fetch(api);
  const jsonResult = await res.json();

  return jsonResult;
};
