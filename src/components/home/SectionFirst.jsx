import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const SectionFirst = () => {
  return (
    <div className="w-full h-full flex items-center">
      <div className="pr-10 flex flex-col gap-10">
        <div className="text-light font-bold text-xl ">
          <p className=" text-5xl text-[#453d32] font-bold font-serif tracking-widest">
            <span className="text-light">K</span>
            YC World
          </p>
          <span className="relative after:absolute after:content-[''] after:top-[90%] after:w-full after:h-1 after:bg-light">
            Known Your City
          </span>
        </div>
        <p className="font-semibold font-serif leading-8 tracking-wide">
          KYC World, a dynamic startup based in the IT Park of Dehradun, is at
          the forefront of app and web development. Specializing in both mobile
          applications and website creation, we offer a full suite of digital
          solutions tailored to the needs of modern businesses. Our team of
          passionate developers and designers is dedicated to turning your ideas
          into powerful, user-friendly digital products.
        </p>

        <Link to={"/about"}>
          <Button
            text="About Us"
            className={
              "border-2 text-light border-dark px-5 hover:bg-dark hover:text-white transition-all"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default SectionFirst;
