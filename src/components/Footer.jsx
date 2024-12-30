import React from "react";
import { Link } from "react-router-dom";
import { CiLinkedin, CiTwitter, CiInstagram } from "react-icons/ci";

import { logo } from "../utils/icons";

const Footer = () => {
  return (
    <div className=" relative pt-32">
      <div className=" absolute rotate-90 left-1/2 top-16 -translate-x-1/2  w-[5%] border-dotted border-2 border-black"></div>
      <div className="absolute rounded-full top-28 z-10 left-1/2 -translate-x-1/2 w-14 h-14 bg-them"></div>
      <div
        style={{
          clipPath: "polygon(50% 0, 100% 20%, 100% 100%, 0 100%, 0 20%)",
        }}
        className="relative bg-gray-600 py-5 text-white font-serif text-base pt-20 "
      >
        <div className="w-11/12 m-auto flex justify-around mb-5 max-lg:gap-2 max-sm:flex-col max-sm:items-center max-sm:gap-5">
          <div className="w-[25%] flex flex-col gap-5 max-lg:w-full max-md:items-center max-md:gap-2">
            <img
              className="w-48 rounded-lg max-lg:w-40 max-md:w-36"
              src={logo}
              alt="appKyc logo"
            />
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/company/app-kyc"
                >
                  <CiLinkedin className="text-white w-10 h-10 transition-all hover:text-them hover:scale-125 max-sm:w-8 max-sm:h-8 " />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://x.com/App_Kyc1">
                  <CiTwitter className="text-white w-10 h-10 transition-all hover:text-them hover:scale-125 max-sm:w-8 max-sm:h-8 " />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.instagram.com/app_kyc/">
                  <CiInstagram className="text-white w-10 h-10 transition-all hover:text-them hover:scale-125 max-sm:w-8 max-sm:h-8 " />{" "}
                </Link>
              </li>
            </ul>
            <p className=" max-sm:text-center">
              IT Park, Sahastradhara Rd, Dehradun, Uttarakhand - 248013
            </p>
          </div>
          <div className=" w-[25%] flex flex-col  gap-5  max-lg:w-full max-sm:w-full max-sm:items-center max-sm:gap-2">
            <h1 className="text-xl"> Contact Us:- </h1>
            <span>Phone: +91 9015920156</span>
            <span>Email: pooja.bhandoria@appkyc.com</span>
          </div>
          <div className="w-[25%] flex flex-col items-center gap-5  max-lg:w-full max-sm:w-full max-sm:items-center max-sm:gap-2">
            <h1 className="text-xl"> Quick Links:- </h1>
            <div className="flex w-full items-center justify-between max-sm:flex-col max-sm:justify-center">
              <ul className="w-full max-sm:text-center border-r-2 border-white max-sm:border-none">
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/services"> Services </Link>
                </li>

                <li>
                  <Link to="/privacy"> Privacy & Policy </Link>
                </li>
                <li>
                  <Link to="/career"> Career </Link>
                </li>
              </ul>
              <ul className="w-full max-sm:text-center flex flex-col items-end max-sm:items-center">
                <li>
                  <Link to="/about"> About </Link>
                </li>
                <li>
                  <Link to="/contact"> Contact </Link>
                </li>

                <li>
                  <Link to="/blogs"> Blogs </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="text-center mt-5">
          {` © copyright 2024 App Kyc Pvt. Ltd. All rights reserved.`}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
