import React, { useState } from "react";
import { style } from "../../utils/style";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isHidden, setHidden] = useState(false);

  function OpenMenu() {
    setHidden(true);
  }

  function CloseMenu() {
    setHidden(false);
  }

  return (
    <header
      className={`w-full ${style.FlexCenter} py-[66px] lg1550:py-[20px] lg1550:px-[15px] lg1060:py-[11px] lg1550:px-[6px]`}
    >
      <div
        className={`w-full max-w-[1595px] ${style.FlexBetween} gap-[15px] md787:gap-[12px] `}
      >
        <div
          className={`${style.FlexBetween} gap-[8.21px] md787:w-full md787:justify-start `}
        >
          <span className={`${style.FlexCenter}`}>
            <svg
              width="39"
              height="56"
              className="lg1060:w-[29px] lg1060:h-[46px] lg912:w-[20px] lg912:h-[40px]"
              viewBox="0 0 39 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.85059 42.0684H19.2909H36.7312"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M5.79102 48.5L19.291 48.5L32.791 48.5"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M18.791 1.50002L18.791 8.50002L18.791 15.5"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M18.8657 14.7842V41.2158"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M29.9254 4.55275L18.8657 15.637"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M34.1792 8.81593L18.8657 24.1633"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M36.7314 15.6367L18.8657 32.6894"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M37.5821 23.3106L18.8657 42.0685"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M37.582 31.8369L27.373 42.0685"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M1 31.8369L11.209 42.0685"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M8.65674 4.55275L18.8657 15.637"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M4.40283 8.81593L18.8655 24.1633"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M1.85059 14.7842L18.8655 32.6895"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M1 22.458L18.8657 41.2159"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M19.291 54.8579C9.19019 54.8579 1 46.4056 1 35.9772V20.0228C1 9.5963 9.19019 1.14211 19.291 1.14211C29.3937 1.14211 37.5821 9.5963 37.5821 20.0228V35.9772C37.5839 46.4056 29.3937 54.8579 19.291 54.8579Z"
                stroke="#7EB693"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </span>
          <h1 className={style.NavLogo}>Organick</h1>
        </div>
        <nav
          className={`${style.FlexBetween} w-full max-w-[564px] lg1060:justify-start lg1060:gap-[12px] lg1060:max-w-[358px] lg912:max-w-[330px] md787:hidden`}
        >
          <NavLink to="/" className={style.NavLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={style.NavLink}>
            About
          </NavLink>
          <div className={`${style.NavLink} relative group`}>
            <h1 className="flex gap-[8px] items-center">
              Pages
              <span className="w-[8px] h-[6px] flex justify-center items-center ">
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.791016 1.5L3.79102 4.5L6.79102 1.5"
                    stroke="#274C5B"
                    className="transition group-hover:stroke-green-300"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
            <div className="absolute top-[100%] left-[-50%] w-[160px] bg-white-50 rounded-[6px] px-[24px] py-[22px] z-[2] gap-[12px] hidden group-hover:grid">
              <NavLink className={style.NavLink} to="/service">
                Service
              </NavLink>
              <NavLink className={style.NavLink} to="/team">
                Our team
              </NavLink>

              <NavLink className={style.NavLink} to="/contact">
                Contact
              </NavLink>
              <NavLink className={style.NavLink} to="/licenses">
                Lisenses
              </NavLink>
            </div>
          </div>
          <NavLink to="/shop" className={style.NavLink}>
            Shop
          </NavLink>
          <NavLink className={style.NavLink} to="/portfolio">
            Projects
          </NavLink>
          <NavLink to="/blog" className={style.NavLink}>
            News
          </NavLink>
        </nav>

        <div
          className={`flex items-center justify-end w-full max-w-[553px] gap-[18px] lg1060:justify-end lg1060:gap-[8px] lg1060:max-w-[368px] lg912:max-w-[326px] md787:max-w-[115px]`}
        >
          <NavLink to="/search-product" className={style.NavLink}>
            <label
              htmlFor="search"
              className="w-full max-w-[376px] h-[66px] relative lg1060:h-[40px] lg1060:max-w-[230px] lg912:h-[35px] md787:hidden"
            >
              <span
                className={`${style.FlexCenter} cursor-pointer w-[56px] h-[56px] rounded-full bg-green-300 absolute top-[50%] right-[6px] translate-y-[-50%] lg1060:w-[32px] lg1060:h-[32px] lg1060:right-[3px]`}
              >
                <svg
                  width="22"
                  height="21"
                  className="lg1060:w-[18px] lg1060:h-[17px]"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4692 18.8921L16.7086 14.1315C17.8547 12.6057 18.4734 10.7485 18.4713 8.84016C18.4713 3.96573 14.5056 0 9.63118 0C4.75674 0 0.791016 3.96573 0.791016 8.84016C0.791016 13.7146 4.75674 17.6803 9.63118 17.6803C11.5395 17.6824 13.3967 17.0637 14.9225 15.9175L19.6831 20.6781C19.9241 20.8936 20.2384 21.0085 20.5615 20.9995C20.8846 20.9905 21.192 20.8581 21.4205 20.6295C21.6491 20.401 21.7815 20.0936 21.7905 19.7705C21.7996 19.4474 21.6846 19.1331 21.4692 18.8921ZM3.31678 8.84016C3.31678 7.59129 3.68711 6.37047 4.38094 5.33207C5.07478 4.29367 6.06095 3.48434 7.21476 3.00642C8.36856 2.52849 9.63818 2.40345 10.8631 2.64709C12.0879 2.89073 13.213 3.49212 14.0961 4.3752C14.9792 5.25829 15.5806 6.38341 15.8242 7.60828C16.0679 8.83315 15.9428 10.1028 15.4649 11.2566C14.987 12.4104 14.1777 13.3966 13.1393 14.0904C12.1009 14.7842 10.88 15.1546 9.63118 15.1546C7.95711 15.1526 6.35218 14.4866 5.16844 13.3029C3.98469 12.1192 3.31878 10.5142 3.31678 8.84016Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </span>
            </label>
          </NavLink>
          <NavLink to="/shop-card" className={style.NavLink}>
            <div
              className={`${style.FlexBetween} w-full max-w-[159px] pl-[6px] pr-[20px] py-[5px] rounded-[33px] gap-[12px] border border-[#e0e0e0] lg1060:gap-[6px] lg1060:justify-start lg1060:max-w-[130px] lg1060:py-[3px] lg1060:pr-[0] lg912:max-w-[115px]`}
            >
              <span
                className={`${style.FlexCenter} w-[56px] h-[56px] rounded-full bg-blue-700 lg1060:w-[40px] lg1060:h-[40px] lg912:w-[32px] lg912:h-[32px]`}
              >
                <svg
                  width="27"
                  height="24"
                  className="lg1060:w-[20px] lg1060:h-[18px] lg912:w-[16px] lg912:h-[14px]"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5689 23.0001C12.2439 23.0001 12.7911 22.4529 12.7911 21.7779C12.7911 21.1029 12.2439 20.5557 11.5689 20.5557C10.8939 20.5557 10.3467 21.1029 10.3467 21.7779C10.3467 22.4529 10.8939 23.0001 11.5689 23.0001Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.1246 23.0001C20.7996 23.0001 21.3468 22.4529 21.3468 21.7779C21.3468 21.1029 20.7996 20.5557 20.1246 20.5557C19.4496 20.5557 18.9023 21.1029 18.9023 21.7779C18.9023 22.4529 19.4496 23.0001 20.1246 23.0001Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.79102 1H5.57291L8.40933 17.0731H23.5369"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.90221 13.1837L23.1494 13.2907C23.2587 13.2908 23.3647 13.2529 23.4493 13.1837C23.5339 13.1144 23.5918 13.0179 23.6133 12.9107L25.3151 4.40145C25.3289 4.33283 25.3272 4.26203 25.3102 4.19414C25.2933 4.12625 25.2615 4.06297 25.2171 4.00886C25.1727 3.95476 25.1169 3.91118 25.0536 3.88128C24.9903 3.85138 24.9212 3.83589 24.8513 3.83594L6.35838 3.83594"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-md text-blue-700 font-semibold font-Roboto lg1060:text-[16px] lg912:text-[14px]">
                Cart (0)
              </p>
            </div>
          </NavLink>
        </div>
        {/* mobile navbar */}
        <section className="mdMin787:hidden">
          <div
            className="w-[32px] h-[32px] flex justify-center items-center"
            onClick={OpenMenu}
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 11H1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 6H13"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 1H1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-[100vh] p-[15px] bg-green-50 z-[100000] flex justify-between ${
              isHidden ? "activeMenu" : "deactiveMenu"
            }`}
          >
            <nav className="flex flex-col w-full justify-center items-center gap-[8px]">
              <NavLink to="/" className={style.NavLink}>
                Home
              </NavLink>
              <NavLink to="/about" className={style.NavLink}>
                About
              </NavLink>
              <div className={`${style.NavLink} group grid justify-center`}>
                <h1 className="w-full flex justify-center gap-[8px] items-center">
                  Pages
                  <span className="w-[8px] h-[6px] flex justify-center items-center ">
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.791016 1.5L3.79102 4.5L6.79102 1.5"
                        stroke="#274C5B"
                        className="transition group-hover:stroke-green-300"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </h1>
                <div className="relative w-full grid border-[#004900] rounded-[6px] z-[2] gap-[12px] max-h-[0] overflow-hidden p-[0] border-[0] transition duration-500 group-hover:max-h-[100%] group-hover:px-[24px] group-hover:py-[22px] group-hover:border group-hover:transition">
                  <NavLink className={style.NavLink} to="/service">
                    Service
                  </NavLink>
                  <NavLink className={style.NavLink} to="/team">
                    Our team
                  </NavLink>

                  <NavLink className={style.NavLink} to="/contact">
                    Contact
                  </NavLink>
                  <NavLink className={style.NavLink} to="/licenses">
                    Lisenses
                  </NavLink>
                </div>
              </div>
              <NavLink to="/shop" className={style.NavLink}>
                Shop
              </NavLink>
              <NavLink className={style.NavLink} to="/portfolio">
                Projects
              </NavLink>
              <NavLink to="/blog" className={style.NavLink}>
                News
              </NavLink>
            </nav>
            <div>
              <div onClick={CloseMenu}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 5.91L6 18.09"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 5.91L18 18.09"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
