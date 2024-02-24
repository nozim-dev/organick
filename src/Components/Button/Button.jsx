import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, isIcon, type }) => {
  //   switch (type) {
  //     case "primary":
  //       "bg-blue-700 text-[#fff] border-bue-700";
  //       break;
  //     case "secondary":
  //       "bg-yellow-300 text-blue-700 border-yellow-300";
  //       break;
  //     case "secondary":
  //       "bg-[transparent] text-blue-700 border-blue-700";
  //     default:
  //       "";
  //       break;
  //   }

  return (
    <Link
      className={`cursor-pointer w-full max-w-[224px] px-[39px] py-[28px] flex items-center rounded-[16px] gap-[10px] font-Roboto font-bold text-2xl border-[2px] transition-all duration-75 hover:bg-[transparent] ${type}`}
    >
      {text}
      {isIcon ? (
        <span className="w-[19px] h-[19px] rounded-full bg-[#335B6B] flex items-center justify-center">
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      ) : (
        ""
      )}
    </Link>
  );
};

export default Button;

// Ternary operator
// 5>6 ? "to'gri" : "Xato"

// if(){
//     "to'gri"
// }else{
//     "Xato"
// }
