import React from "react";
import Background from "./images/background.png";
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
      <section></section>
    </div>
  );
};

export default Main;
