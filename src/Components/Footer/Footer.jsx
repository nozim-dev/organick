import React from "react";
import { style } from "..//..//utils/style";
import Background from "./img/Image.png";
const Footer = () => {
  return (
    <footer>
      <span className="mt-[176px] relative z-10 flex items-center place-content-center  ">
        <img
          className="z-0 w-full max-w-[1400px] h-[323px] object-cover rounded-3xl"
          src={Background}
        />

        <h1 className=" w-full max-w-[357px] text-[50px] absolute z-30 text-white-50 mr-[900px] ">
          Subscribe to our Newsletter
        </h1>

        <label className="absolute flex ">
          <input
            type="text"
            className=" w-[349px] h-[80px] rounded-[16px] border-0 bg-white-50 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
            placeholder="Your Email Address"
          />

          <button
            type="button"
            className="w-full max-w-[220px] h-[80px] rounded-[16px] text-white-50  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 ml-[10px] me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </label>
      </span>
      <br />
      <br />
      <br />
      <div className=" mx-auto w-full ">
        <div className="flex justify-center text-end lg:py-10">
          <div className="      p-10   ">
            <h2 className=" font-bold  mb-7 text-2.5xl  text-blue-700  dark:text-white">
              Contact Us
            </h2>
            <ul className="text-gray-500 blue-80 font-medium ">
              <li className="mb-4 block">
                <h1>Email</h1>
                <a href="#" className=" hover:underline font-light">
                  needhelp@Organia.com
                </a>
              </li>
              <li className="mb-4 block ">
                <h1>Phone</h1>
                <a href="#" className="hover:underline font-light">
                  666 888 888
                </a>
              </li>
              <li className="mb-4 block">
                <h1>Address</h1>
                <a href="#" className="hover:underline  font-light">
                  88 road, borklyn street, USA
                </a>
              </li>
            </ul>
          </div>

          <div className="max-w-[700px]  text-center p-0 border-x-2 ">
            <div className=" flex justify-center ">
              <span className="mr-[10px]">
                <svg
                  width="39"
                  height="56"
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
            <p className=" p-4 pt-20 text-center text-gray-500 blue-80 font-normal text-2xl">
              Simply dummy text of the printing and typesetting industry.Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className="follow gap-x-5 flex justify-center">
              <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative">
                <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6585 2.26307C14.7231 2.26613 15.7431 2.67471 16.4958 3.39958C17.2486 4.12445 17.6729 5.1067 17.6761 6.13181V13.8685C17.6729 14.8936 17.2486 15.8758 16.4958 16.6007C15.7431 17.3256 14.7231 17.7342 13.6585 17.7372H5.6243C4.55976 17.7342 3.53973 17.3256 2.78698 16.6007C2.03423 15.8758 1.60994 14.8936 1.60676 13.8685V6.13181C1.60994 5.1067 2.03423 4.12445 2.78698 3.39958C3.53973 2.67471 4.55976 2.26613 5.6243 2.26307H13.6585ZM13.6585 0.71582H5.6243C2.53087 0.71582 0 3.15296 0 6.13181V13.8685C0 16.8473 2.53087 19.2845 5.6243 19.2845H13.6585C16.752 19.2845 19.2828 16.8473 19.2828 13.8685V6.13181C19.2828 3.15296 16.752 0.71582 13.6585 0.71582Z"
                      fill="#274C5B"
                    />
                    <path
                      d="M14.8638 6.1326C14.6254 6.1326 14.3924 6.06454 14.1942 5.93702C13.996 5.8095 13.8416 5.62824 13.7504 5.41618C13.6591 5.20412 13.6353 4.97078 13.6818 4.74565C13.7283 4.52053 13.8431 4.31374 14.0116 4.15144C14.1802 3.98913 14.3949 3.8786 14.6287 3.83382C14.8625 3.78904 15.1048 3.81203 15.325 3.89986C15.5452 3.9877 15.7334 4.13645 15.8659 4.3273C15.9983 4.51815 16.069 4.74253 16.069 4.97206C16.0693 5.12456 16.0384 5.27562 15.9779 5.41657C15.9175 5.55752 15.8287 5.68559 15.7167 5.79342C15.6048 5.90125 15.4718 5.98673 15.3254 6.04493C15.179 6.10314 15.0222 6.13293 14.8638 6.1326ZM9.64151 6.90602C10.2772 6.90602 10.8986 7.08754 11.4271 7.42761C11.9556 7.76768 12.3676 8.25104 12.6108 8.81656C12.8541 9.38209 12.9177 10.0044 12.7937 10.6047C12.6697 11.2051 12.3636 11.7565 11.9141 12.1894C11.4646 12.6222 10.892 12.917 10.2685 13.0364C9.64507 13.1558 8.99886 13.0945 8.41158 12.8603C7.82431 12.626 7.32236 12.2293 6.96921 11.7204C6.61606 11.2114 6.42756 10.6131 6.42756 10.0009C6.42847 9.18038 6.76738 8.39369 7.36991 7.81347C7.97245 7.23325 8.7894 6.9069 9.64151 6.90602ZM9.64151 5.35877C8.68806 5.35877 7.75603 5.63103 6.96327 6.14112C6.17051 6.65121 5.55263 7.37621 5.18776 8.22446C4.82289 9.0727 4.72742 10.0061 4.91343 10.9066C5.09944 11.8071 5.55857 12.6342 6.23275 13.2834C6.90694 13.9327 7.76591 14.3748 8.70104 14.5539C9.63616 14.733 10.6054 14.6411 11.4863 14.2897C12.3672 13.9384 13.1201 13.3434 13.6498 12.58C14.1795 11.8166 14.4622 10.9191 14.4622 10.0009C14.4622 8.76976 13.9543 7.58901 13.0503 6.71843C12.1462 5.84786 10.92 5.35877 9.64151 5.35877Z"
                      fill="#274C5B"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative">
                <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.2828 10.0001C19.2828 4.87304 14.9657 0.71582 9.64141 0.71582C4.31711 0.71582 0 4.87304 0 10.0001C0 14.634 3.52514 18.475 8.13494 19.1721V12.6847H5.68628V10.0001H8.13494V7.95469C8.13494 5.62822 9.5747 4.34209 11.7767 4.34209C12.8317 4.34209 13.9353 4.52364 13.9353 4.52364V6.80866H12.7189C11.5219 6.80866 11.1475 7.52405 11.1475 8.25933V10.0001H13.8212L13.3942 12.6847H11.1479V19.173C15.7577 18.4762 19.2828 14.6353 19.2828 10.0001Z"
                      fill="#274C5B"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative">
                <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6602 2.67424C19.8852 3.01098 19.0652 3.23283 18.2261 3.33278C19.1079 2.81644 19.7711 1.99614 20.0912 1.02573C19.2575 1.51322 18.3469 1.85527 17.3984 2.03722C16.9991 1.61865 16.5187 1.28566 15.9866 1.0585C15.4546 0.831346 14.8818 0.714758 14.3033 0.715828C11.9609 0.715828 10.0654 2.58385 10.0654 4.8866C10.0637 5.2069 10.1004 5.52625 10.1747 5.83783C8.49507 5.75909 6.85036 5.33061 5.34581 4.57982C3.84126 3.82903 2.50999 2.77244 1.43717 1.47767C1.0608 2.11216 0.861758 2.8361 0.86084 3.57382C0.86084 5.02003 1.61537 6.29838 2.75469 7.04731C2.07967 7.03129 1.41849 6.85263 0.827268 6.5265V6.57815C0.827268 8.60112 2.2907 10.2841 4.22759 10.6671C3.86336 10.7642 3.48803 10.8134 3.11108 10.8135C2.84361 10.814 2.57674 10.788 2.31437 10.736C2.85283 12.3931 4.41999 13.5983 6.27639 13.6327C4.76793 14.7953 2.91593 15.4236 1.01149 15.419C0.673443 15.4185 0.335713 15.3984 0 15.3587C1.9374 16.5958 4.18947 17.2502 6.48815 17.244C14.2943 17.244 18.5589 10.8867 18.5589 5.37297C18.5589 5.1922 18.5541 5.01142 18.5455 4.83495C19.3733 4.24616 20.0893 3.51447 20.6602 2.67424Z"
                      fill="#274C5B"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative">
                <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.79664 0.71582C4.38662 0.71582 0 5.10048 0 10.5081C0 14.5168 2.41417 17.9616 5.86486 19.4785C5.83862 18.7965 5.86049 17.9747 6.03543 17.2315C6.22349 16.4359 7.295 11.8939 7.295 11.8939C7.295 11.8939 6.9801 11.2687 6.9801 10.3463C6.9801 8.89499 7.81982 7.81084 8.86946 7.81084C9.76165 7.81084 10.1903 8.47969 10.1903 9.27968C10.1903 10.1758 9.61732 11.5135 9.3243 12.7551C9.07938 13.7955 9.84475 14.6392 10.8725 14.6392C12.7269 14.6392 13.9777 12.2567 13.9777 9.43269C13.9777 7.28626 12.5301 5.6819 9.9016 5.6819C6.932 5.6819 5.07763 7.89827 5.07763 10.3726C5.07763 11.225 5.3313 11.8283 5.72491 12.2917C5.90422 12.5059 5.93046 12.5933 5.86486 12.8381C5.81675 13.0174 5.71179 13.4501 5.66368 13.625C5.59808 13.8742 5.3969 13.9616 5.17385 13.8698C3.80494 13.3102 3.16641 11.8152 3.16641 10.1278C3.16641 7.34746 5.51498 4.01197 10.1684 4.01197C13.9077 4.01197 16.37 6.71795 16.37 9.62066C16.37 13.4633 14.2314 16.331 11.0824 16.331C10.0241 16.331 9.03128 15.7583 8.69014 15.1113C8.69014 15.1113 8.12159 17.367 7.99913 17.8042C7.79357 18.5605 7.38684 19.3124 7.01509 19.9025C7.91686 20.1684 8.85208 20.3039 9.79226 20.3047C15.2023 20.3047 19.5889 15.9201 19.5889 10.5125C19.5889 5.10485 15.2067 0.71582 9.79664 0.71582Z"
                      fill="#274C5B"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="  p-10   ">
            <h2 className=" font-bold  mb-7 text-2.5xl  text-blue-700  dark:text-white">
              Utility Pages
            </h2>
            <ul className="text-gray-500 blue-80 font-medium  ">
              <li className="mb-4 ">
                <a href="#" className=" hover:underline font-light">
                  Style Guide
                </a>
              </li>
              <li className="mb-4 block ">
                <a href="#" className="hover:underline font-light">
                  404 Not Found
                </a>
              </li>
              <li className="mb-4 block">
                <a href="#" className="hover:underline  font-light">
                  Password Protected
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className=" hover:underline font-light">
                  Licences
                </a>
              </li>
              <li className="mb-4 block ">
                <a href="#" className="hover:underline font-light">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className=" w-full h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></p>
        <div class="container w-full max-w-[1920px] align-center text-center ">
          <div class="mb-9 flex justify-center">
            <a
              href="#!"
              class="text-white hover:text-primary-500 transition duration-300"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#!"
              class="ml-4 text-white hover:text-primary-500 transition duration-300"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#!"
              class="ml-4 text-white hover:text-primary-500 transition duration-300"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>

            <p class="text-sm text-neutral-400 dark:text-neutral-300">
              &copy; 2024 Organick. All rights reserved.ing reserved 
            </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
