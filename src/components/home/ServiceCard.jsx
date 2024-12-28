import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ title, text, pic, className }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200,
      once: true, // Animation happens only once
      mirror: false,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col items-center justify-start gap-5 w-4/5 m-auto ${className}`}
    >
      <img className="max-sm:w-28" src={pic} alt={title} />
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-[#000000] font-poppinsSemibold text-2xl">
          {" "}
          {title}{" "}
        </h1>
        <p className="font-poppinsExtraLight text-[#000000] text-center text-sm">
          {" "}
          {text}{" "}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
