import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { heroSection, mouse } from "../../utils/icons";

const HeroSection = () => {
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
      style={{
        backgroundImage: `url(${heroSection})`,
        clipPath: "polygon(100% 0, 100% 70%, 50% 100%, 0 70%, 0 0)",
      }}
      className="relative clip-path-polygon w-full flex items-center justify-center h-[90vh] p-10 bg-cover bg-no-repeat bg-center"
    >
      <div
        data-aos="zoom-in"
        className="flex items-center justify-center flex-col"
      >
        <p className="font-poppinsBold text-white text-5xl max-md:text-3xl">
          Welcome To
        </p>
        <h1 className="text-center font-poppinsBold text-them text-9xl text-shadow-lg max-md:text-6xl">
          APP KYC
        </h1>
        <p className="font-poppinsBold text-5xl text-white capitalize text-center max-md:text-3xl">
          web & app development company
        </p>
      </div>
      <img
        className="absolute left-1/2 bottom-2 -translate-x-1/2 max-sm:bottom-5"
        src={mouse}
        alt="mouse"
      />
    </div>
  );
};

export default HeroSection;
