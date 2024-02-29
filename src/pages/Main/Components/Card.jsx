import React from "react";

const Card = ({ product, id }) => {
  return (
    <div
      key={id}
      className="w-full max-w-[335px] h-[483px] bg-white-50 rounded-[30px] pl-[30px] pr-[26px] pt-[29px] pb-[17px]"
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
      <span >{product.category}</span>
      <h1>{product.title}</h1>
      <del>{product.oldPrice}</del>
      <h5>{product.price}</h5>
    </div>
  );
};

export default Card;
