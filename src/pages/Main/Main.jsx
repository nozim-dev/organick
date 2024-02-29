import React, { useEffect, useState } from "react";
import Background from "./images/background.png";
import Background1 from "./images/Photo.jpg";
import Background2 from "./images/Photo1.jpg";
import Background3 from "./images/Photo.png";
import Icon1 from "./images/Icon.png";
import Icon2 from "./images/Icon1.png";

import Button from "../../Components/Button/Button";
import { style } from "../../utils/style";
import axios from "axios";
import Card from "./Components/Card";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        // success
        // console.log(response.data);
        setProducts(response.data);
      })
      .catch(function (err) {
        // error
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="relative">
        <div className="w-full h-[898px] max-w-[1920px] mx-auto max-h-[898px]">
          <img
            className="w-full h-full object-cover"
            src={Background}
            alt="Background"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-70%] w-full max-w-[1413px] mx-auto">
          <h5 className={`${style.SectionSubtitle}text-[#68A47F]`}>
            100% Natural Food
          </h5>
          <h1 className="font-Roboto font-extrabold text-7xl leading-[82.03px] text-blue-700 mb-[27px]">
            Choose the best <br /> healthier way <br /> of life
          </h1>
          <Button
            text="Explore Now"
            isIcon={true}
            type="bg-yellow-300 text-blue-700 border-yellow-300"
          />
        </div>
      </section>
      <section className="relative mx-auto w-full flex justify-center place-items-center gap-[36px]  mt-[196px]">
        <div className="">
          <img
            className="w-[682px] h-[367px] object-cover rounded-[30px] "
            src={Background1}
            alt="Background"
          />
          <div className="absolute top-1/2 left-1/2 translate-x-[-46%] translate-y-[-45%] w-full max-w-[1413px] mx-auto">
            <h5 className="font-Yellowtail text-[36px] text-[#ffff] mb-[8px]">
              Natural !!
            </h5>
            <h1 className="font-Roboto font-extrabold text-4xl text-[white] mb-[27px]">
              Get Garden <br />
              Fresh Fruits
            </h1>
          </div>
        </div>

        <div className="">
          <img
            className="w-[682px] h-[367px] object-cover rounded-[30px] "
            src={Background2}
            alt="Background"
          />
          <div className="absolute top-1/2 left-1/2 translate-x-[35%] translate-y-[-45%]  max-w-[1413px] mx-auto">
            <h5 className="font-Yellowtail text-[36px] text-[#68A47F]  mb-[8px]">
              Natural !!
            </h5>
            <h1 className="font-Roboto font-extrabold text-4xl text-blue-700 mb-[27px]">
              Get Garden <br />
              Fresh Fruits
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1920px] mx-auto py-[186px] px-[100px] flex justify-center bg-[#F9F8F8] mt-[190px]">
        <div className="w-full ">
          <img src={Background3} alt="" className="w-full max-w-[911px]" />
        </div>
        <div className="w-full">
          <h5 className={`${style.SectionSubtitle} text-[#7EB693]`}>
            About Us
          </h5>
          <h1 className={`${style.Title} `}>
            We Believe in Working <br /> Accredited Farmers
          </h1>
          <p className={`${style.SubTitle} mt-[14px] mr-[12px] max-w-[690px]`}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="grid gap-[30px] my-[46px]">
            <div className="flex gap-[19px]">
              <div className="w-[101px] h-[101]">
                <img src={Icon1} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  Organic Foods Only
                </h2>
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[165.4%] max-w-[444px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex gap-[19px]">
              <div className="w-[101px] h-[101]">
                <img src={Icon2} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  Quality Standards
                </h2>
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[165.4%] max-w-[444px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <Button
            text="Shop Now"
            isIcon={true}
            type="bg-blue-700 text-[#fff] border-bue-700 hover:text-blue-700"
          />
        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto mt-[176px]">
        <h5 className={`${style.SectionSubtitle} text-[#7EB693] text-center`}>
          Categories
        </h5>
        <h1 className={`${style.Title} text-center`}>Our Products</h1>
        <div className="flex mt-[40px] flex-wrap gap-[20px]">
          {products.map((product, id) => (
            <Card product={product} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;

// front-end run qilish: npm run dev
// backend run qilish: npx json-server backend/Product/product.json
