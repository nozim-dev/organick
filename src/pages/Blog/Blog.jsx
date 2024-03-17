import React from "react";
import Banner from "../../Components/Banner/Banner";
import { style } from "../../utils/style";
import BlogBanner from "./images/banner.png";
import Photo from "./images/Photo.png";

// import Photo1 from "./images/Photo1.png";
// import Photo2 from "./images/Photo2.png";
// import Photo3 from "./images/Photo3.png";
// import Photo4 from "./images/Photo4.png";
// import Photo5 from "./images/Photo5.png";
import Vector from "./images/Vector.png";

const Blog = () => {
  return (
    <div>
      <section>
        <Banner title="Recent  News" img={BlogBanner} />
      </section>
      <section className="w-full max-w-[1920px] mt-[120px] mx-auto flex justify-center">
        <div className="w-full max-w-[1440px]">
          <div className="block ">
            <div className="w-full max-w-[677px] ">
              <div className="relative text-center">
                <div className="absolute w-full max-w-[82px] h-[82px] bg-[#FFFFFF] rounded-full mt-[43px] ml-[32px]">
                  <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold md787:text-2xl align-center py-[5px]">
                    25 <br /> Nov
                  </h2>
                </div>
              </div>
              <div className="w-full max-w-[677px] h-[524px]">
                <img src={Photo} className="w-full rounded-[30px]" alt="" />
              </div>
            </div>
            <div className="w-full max-w-[612px] h-[239px] bg-[aqua] hover:bg-[#FFFFFF] hover:shadow-lg shadow-5-strong transition duration-700 ease-in-out rounded-[30px] px-[57px] py-[54px] ">
              <div className="w-full block ">
                <div className="w-full flex gap-[6px]">
                  <div className="">
                    <img src={Vector} alt="" />
                  </div>
                  <p className={`${style.Subtitle}`}>By Rachi Card</p>
                </div>
                <h2 className=" text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  The Benefits of Vitamin D & How to Get It
                </h2>
                <p
                  className={`${style.SubTitle} `}
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
