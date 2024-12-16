import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { redCircle } from "../utils/icons";

const Footer = () => {
  const [year, setYear] = useState("");
  const handelGetYear = () => {
    const getYear = new Date().getFullYear();
    if (getYear) {
      setYear(getYear);
    }
  };

  useEffect(() => {
    handelGetYear();
  }, []);

  return (
    <div className=" relative pt-32">
      <div className=" absolute rotate-90 left-1/2 top-16 -translate-x-1/2  w-[5%] border-dotted border-2 border-black">
        {" "}
      </div>
      <div className="absolute rounded-full top-28 z-10 left-1/2 -translate-x-1/2 w-14 h-14 bg-them"></div>
      <div
        style={{
          clipPath: "polygon(50% 0, 100% 20%, 100% 100%, 0 100%, 0 20%)",
        }}
        className="relative bg-section-background py-5 text-white font-serif text-base pt-20 "
      >
        <div className="w-11/12 m-auto flex items-baseline justify-between mb-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl"> Address:- </h1>
            <p>IT Park, Dehradun, Uttarakhand, India</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl"> Contact Us:- </h1>
            <span>Phone: +91-XXXXXXXXXX</span>
            <span>Email: poojakycworld@gmail.com</span>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl"> Quick Links:- </h1>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/services"> Service </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
              <li>
                <Link to="/career"> Career </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <h1 className="text-center mt-5">
          {` © ${year} KYC World Pvt. Ltd. All rights reserved.`}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
