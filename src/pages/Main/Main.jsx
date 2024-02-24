import React from "react";
import Background from "./images/background.png";
import Background1 from "./images/Photo.jpg";
import Background2 from "./images/Photo1.jpg";
import Background3 from "./images/Photo.png";
import Icon1 from "./images/Icon.png";
import Icon2 from "./images/Icon1.png";

import Button from "../../Components/Button/Button";
import { style } from "../../utils/style";

const Main = () => {
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

      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="w-full max-w-[1920px] mx-auto py-[85px] flex justify-center bg-[#F9F8F8]">
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
          <div>
            <div>
              <div>
                <img src={Icon1} alt="" />
              </div>
              <div>
                <h2>Organic Foods Only</h2>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={Icon1} alt="" />
              </div>
              <div>
                <h2>Quality Standards</h2>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <Button
            text="Shop Now"
            isIcon={true}
            type="bg-blue-700 text-[#fff] border-bue-700"
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
