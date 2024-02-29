import React from "react";

const Card = ({ product, id }) => {
  return (
    <div
      key={id}
      className="w-full max-w-[335px] h-[483px] bg-white-50 rounded-[30px] pl-[30px] pr-[26px] pt-[29px] pb-[17px]  "
    >
      <img 
        src={product.image}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
        }}
        alt=""
      />
      <span className="  w-[96px] h-[31px] text-center rounded-[8px] bg-blue-700  p-[2px] text-[#FFFFFF] mt-[29px] ml-[30px]">
        {product.category}
      </span>
      <h1 class="text-2xl font-Roboto font-semibold  text-blue-700 leading-[23.44px] ">
        {product.title}
      </h1>
      <div class="flex items-center mt-[1px] ">
        <div class="flex items-center w-full h-px my-3 bg-gray-200 border-0  "></div>
      </div>
      <del class="text-2xl font-Roboto font-semibold  text-blue-700 leading-[23.44px] ">
        {product.oldPrice}
      </del>
      <h5 class="text-[18px] font-bold text-blue-700 font-Open-Sans leading-[24.51px] ">
        {product.price}
      </h5>
    </div>
  );
};

export default Card;


