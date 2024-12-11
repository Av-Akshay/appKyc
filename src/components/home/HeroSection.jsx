import React from "react";
import { heroSection, mouse } from "../../utils/icons";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroSection})`,
        clipPath: "polygon(100% 0, 100% 70%, 50% 100%, 0 70%, 0 0)",
      }}
      className="relative clip-path-polygon w-full flex items-center justify-center h-[90vh] p-10 bg-cover bg-no-repeat bg-center"
    >
      <div className="flex items-center justify-center flex-col">
        <p className="font-poppinsBold text-white text-5xl">Welcome To</p>
        <h1 className="font-poppinsBold text-them text-9xl text-shadow-lg">
          APP KYC
        </h1>
        <p className="font-poppinsBold text-5xl text-white capitalize">
          web & app development company
        </p>
      </div>
      <img
        className="absolute left-1/2 bottom-2 -translate-x-1/2"
        src={mouse}
        alt="mouse"
      />
    </div>
  );
};

export default HeroSection;
