import React from "react";
import Banner from "../../Components/Banner/Banner";
import { style } from "../../utils/style";
import AboutBanner from "./images/Banner.png";
import AboutImage from "./images/AboutImage.png";
import AboutIcon from "./images/AboutIcon.png";
import AboutIcon1 from "./images/AboutIcon1.png";
import Button from "../../Components/Button/Button";

const About = () => {
  return (
    <div>
      <section>
        <Banner title="About Us" img={AboutBanner} />
      </section>
      <section className=" max-w-[1920px] mx-auto py-[186px] pr-[100px] flex justify-center bg-[#F9F8F8] mt-[68px]">
        <div className="w-full h-[764px] max-h-[764px] max-w-[737px] ">
          <img src={AboutImage} alt="" className="h-full object-cover " />
        </div>
        <div className="w-full max-w-[847px] h-[648px] ">
          <h5 className={`${style.SectionSubtitle} text-[#7EB693]`}>
            About Us
          </h5>
          <h1 className={`${style.Title} `}>
            We do Creative <br /> Things for Success
          </h1>
          <p className={`${style.SubTitle} mt-[14px] mr-[12px] max-w-[690px]`}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
            <br /> <br />
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex gap-[30px] my-[46px]">
            <div className="flex gap-[19px]">
              <div className="w-[60px] h-[60px]">
                <img src={AboutIcon} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  Modern Agriculture <br /> Equipment
                </h2>
              </div>
            </div>
            <div className="flex gap-[19px]">
              <div className="w-[60px] h-[60px]">
                <img src={AboutIcon1} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  No growth <br /> hormones are used
                </h2>
              </div>
            </div>
          </div>
          <Button
            text="Explore More"
            isIcon={true}
            type="bg-blue-700 text-[#fff] border-bue-700 hover:text-blue-700 pl-[28px]"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
