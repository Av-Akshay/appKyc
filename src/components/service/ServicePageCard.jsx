import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicePageCard = ({
  subHeadingColor,
  pic,
  subheading,
  heading,
  pera,
  className,
  link,
  props,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200,
      once: true, // Animation happens only once
      mirror: false,
    });
  }, []);
  return (
    <Link
      data-aos="zoom-in"
      to={link}
      className={`flex items-center justify-center max-sm:flex-col ${
        className !== "" ? className : ""
      } `}
      {...props}
    >
      <div className="w-1/2 max-sm:w-4/5 ">
        <img src={pic} alt={heading} />
      </div>
      <div
        className={`flex flex-col gap-2 w-1/2 max-sm:items-center max-sm:w-4/5 ${
          !className ? "items-start " : " items-end "
        } `}
      >
        <div
          className={`flex flex-col gap-1 max-sm:items-center ${
            !className ? "items-start " : " items-end "
          }`}
        >
          <p className={`uppercase ${subHeadingColor}`}> {subheading} </p>
          <h2 className="uppercase text-black font-poppinsSemibold text-2xl max-sm:text-center max-sm:text-xl cursor-pointer after:transition-all relative after:content-[' '] after:absolute after:w-0 after:h-1 after:bg-[#FF9900] after:top-full after:left-0 hover:after:w-full ">
            {heading}
          </h2>
        </div>
        <p
          className={`text-black font-poppinsExtraLight max-sm:text-center ${
            !className ? "text-start " : " text-end "
          } `}
        >
          {pera}
        </p>
      </div>
    </Link>
  );
};

export default ServicePageCard;
