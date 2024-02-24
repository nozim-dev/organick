import React from "react";
import Background from "./images/background.png";
import Background1 from "./images/Photo.jpg";
import Background2 from "./images/Photo (1).jpg";
import Background3 from "./images/Photo.png";

import Button from "../../Components/Button/Button";

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
          <h5 className="font-Yellowtail text-[36px] text-[#68A47F] mb-[8px]">
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

      <section className="w-full max-w-[1920px]  h-[1067px] bg-[#F9F8F8]">
        <div className="">
          <img src={Background3} alt="" />
          <div className=""></div>
        </div>
      </section>
    </div>
  );
};

export default Main;
