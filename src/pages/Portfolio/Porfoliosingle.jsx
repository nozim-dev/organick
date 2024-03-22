import React from "react";

import { style } from "../../utils/style";
import image from "./img/Image.png";
import photo from "./img/Photo.png";

const Porfoliosingle = () => {
  return (
    <div>
      <section className="w-full max-w-[1920px]  relative flex justify-start items-center mx-auto h-[100vh] max-h-[898px] px-[80px] sm520:px-[15px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="Background"
          />
        </div>
        <div className="flex justify-center w-full max-h-[385px] z-10 translate-y-[100%]">
          <div className="flex flex-wrap bg-[#FFFFFF] w-full max-w-[1500px] pl-[89px] pt-[78px] pb-[77px] rounded-[30px] md677:p-10 md677:h-full shadow-lg shadow-5-strong transition duration-700 ease-in-out">
            <div className="block lg1400:px-[10px]">
              <h1 className="text-7xl font-Roboto text-blue-700 font-bold">
                Black Raspberry
              </h1>
              <p className="w-full max-w-[726px] text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[29.77px] max-w-[635px]">
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed
              </p>
            </div>

            <div className="w-full max-w-[287px] flex flex-wrap pt-[36px]">
              <div className="flex lg1400:px-[10px] gap-[45px] pb-[16px] ">
                <p className="text-blue-700 font-medium font-Roboto text-2.5xl leading-[29.3px]">
                  Date
                </p>
                <p className="w-full max-w-[726px] text-md font-Open-Sans text-blue-80 font-normal leading-[29.77px] max-w-[635px]">
                  December 4, 2022
                </p>
              </div>
              <div className="flex lg1400:px-[10px] gap-[45px] pb-[16px]">
                <p className="text-blue-700 font-medium font-Roboto text-2.5xl leading-[29.3px]">
                  Client
                </p>
                <p className="w-full max-w-[726px] text-md font-Open-Sans text-blue-80 font-normal leading-[29.77px] max-w-[635px]">
                  Kevin Martin
                </p>
              </div>
              <div className="flex lg1400:px-[10px] gap-[45px] pb-[16px]">
                <p className="text-blue-700 font-medium font-Roboto text-2.5xl leading-[29.3px]">
                  Category
                </p>
                <p className="w-full max-w-[726px] text-md font-Open-Sans text-blue-80 font-normal leading-[29.77px] max-w-[635px]">
                  Agriculture , Eco
                </p>
              </div>
              <div className="flex lg1400:px-[10px] gap-[45px] pb-[16px]">
                <p className="text-blue-700 font-medium font-Roboto text-2.5xl leading-[29.3px]">
                  Service
                </p>
                <p className="w-full max-w-[726px] text-md font-Open-Sans text-blue-80 font-normal leading-[29.77px] max-w-[635px]">
                  Organic Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1920px] mx-auto pt-[209px] flex justify-center items-center">
        <div className="w-full max-w-[937px] mx-auto">
          <div className="w-full">
            <h2 className="text-blue-700 font-bold font-Roboto text-3.5xl leading-[29.3px]">
              About The Farm:
            </h2>
            <p className="w-full max-w-[936px] text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[635px]">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="w-full max-w-[936px] text-md font-Open-Sans text-blue-80 mt-[44px] font-normal leading-[29.77px] max-w-[635px]">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
          </div>
          <div className="w-full max-w-[964px] mt-[40px] rounded-[20px] text-center">
            <img
              src={photo}
              className="w-full rounded-[20px] object-cover"
              alt=""
            />{" "}
            <p className="w-full max-w-[936px] text-md font-Open-Sans text-blue-80 mt-[19px] font-normal leading-[29.77px] max-w-[635px]">
              The Organic Products
            </p>
          </div>
          <div className="w-full  mt-[30px]">
            <h2 className="text-blue-700 font-bold font-Roboto text-3.5xl leading-[29.3px]">
            How To Farm:
            </h2>
            <p className="w-full max-w-[936px] text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[635px]">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="w-full max-w-[936px] text-md font-Open-Sans text-blue-80 mt-[44px] font-normal leading-[29.77px] max-w-[635px]">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
          </div>
          <div className="w-full  mt-[40px]">
            <h2 className="text-blue-700 font-bold font-Roboto text-3.5xl  leading-[29.3px]">
            Conclusion:
            </h2>
            <p className="w-full max-w-[936px] text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[635px]">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="w-full max-w-[936px] text-md font-Open-Sans text-blue-80 mt-[44px] font-normal leading-[29.77px] max-w-[635px]">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Porfoliosingle;
