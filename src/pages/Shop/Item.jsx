import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import SingleBanner from "./img/Banner Image.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const Item = () => {
  const [product, setProduct] = useState(null);
  const [CardData, setCardData] = useState([]);
  const [relatedCardData, setRelatedCardData] = useState([]);
  const { shopId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/ShopProducts/${shopId}`).then((card) => {
      setProduct(card.data);
    });
    axios.get("http://localhost:3000/ShopProducts").then((card) => {
      setCardData(card.data);
    });
  }, [shopId]);

  if (!product) {
    return <Loader />;
  }

  function RandomNumberFunction(card, length) {
    for (let i = 0; i < length; i++) {
      let randomId = Math.floor(Math.random() * 10);
      console.log(randomId);
      let result = card.filter((item) => item.id === randomId);
      console.log(result);
      relatedCardData.push(result);
    }
  }

  RandomNumberFunction(CardData, 4);

  console.log(relatedCardData);

  return (
    <div>
      <Banner title="Shop Single" img={SingleBanner} />
      <section
        className="w-full max-w-[1400px] flex gap-[88px]"
        key={product.id}
      >
        <div className="w-full max-w-[600px] h-[600px]">
          <img
            className="w-full h-full"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        <div>
          <h1>{product.title}</h1>
          <div className="w-full max-w-[84px] flex">
            <span className="flex justify-center items-center">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z"
                  fill="#FFA858"
                />
              </svg>
            </span>
            <span className="flex justify-center items-center">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z"
                  fill="#FFA858"
                />
              </svg>
            </span>
            <span className="flex justify-center items-center">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z"
                  fill="#FFA858"
                />
              </svg>
            </span>
            <span className="flex justify-center items-center">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z"
                  fill="#FFA858"
                />
              </svg>
            </span>
            <span className="flex justify-center items-center">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z"
                  fill="#FFA858"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>
      <br />
      <br />
      <h1>Related Products</h1>
      {relatedCardData.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h3>{item.id}</h3>
        </div>
      ))}
    </div>
  );
};

export default Item;
