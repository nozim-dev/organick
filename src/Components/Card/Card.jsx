import React from "react";

const Card = ({ product }) => {
  return (
    <div className="w-full max-w-[335px] bg-white-50 rounded-[30px] pl-[30px] pr-[26px] pt-[29px] pb-[17px]">
      <span className="w-full max-w-[96px] text-[15px] text-center rounded-[8px] bg-blue-700 pt-[5px] pb-[6px] px-[12px] text-[#FFFFFF] ">
        {product.category}
      </span>
      <div className="w-full h-[324px] mt-[13px] bg-white-50">
        <img
          src={product.imageUrl}
          className="w-full h-full object-contain rounded-[12px] mix-blend-multiply"
          alt=""
        />
      </div>
      <h1 className="text-2xl font-Roboto font-semibold text-blue-700 leading-[23.44px] mt-[12px] pb-[13px] border-b-[1px] border-[#DEDDDD]">
        {product.title}
      </h1>
      <div className="flex justify-between items-center mt-[6px]">
        <div className="flex gap-[8px] items-center">
          <del className="text-[15px] font-Open-Sans font-semibold text-[#B8B8B8] leading-[20.43px]">
            ${product.oldPrice}.00
          </del>
          <h5 className="text-[18px] font-bold text-blue-700 font-Open-Sans leading-[24.51px] ">
            ${product.price}.00
          </h5>
        </div>
        <div className="flex items-center gap-[3px]">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            className="cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
              fill="#FFA858"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            className="cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
              fill="#FFA858"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            className="cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
              fill="#FFA858"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            className="cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
              fill="#FFA858"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            className="cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
              fill="#FFA858"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
