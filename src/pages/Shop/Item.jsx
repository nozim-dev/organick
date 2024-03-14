import React from "react";
import Banner from "../../Components/Banner/Banner";
import SingleBanner from "./img/Banner Image.jpg";
import { useLoaderData } from "react-router-dom";

let api = "http://localhost:3000/ShopProducts";

export const postLoader = async ({ params }) => {
  const res = await fetch(`${api}/${params.shopId}`);
  const resJson = await res.json();
  
  return resJson;
};

const Item = () => {
  const result = useLoaderData();
  return (
    <div>
      <Banner title="Shop Single" img={SingleBanner} />
      <h5>{result.id}</h5>
      <h1>{result.title}</h1>
      <p>{result.text}</p>
    </div>
  );
};

export default Item;
