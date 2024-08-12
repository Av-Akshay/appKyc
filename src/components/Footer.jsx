import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-slate-950 py-5 text-white font-serif text-base ">
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
              <li>
                <Link to="/services"> Service </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <h1 className="text-center mt-5">
        {` © ${year} KYC World Pvt. Ltd. All rights reserved.`}
      </h1>
    </div>
  );
};

export default Footer;
