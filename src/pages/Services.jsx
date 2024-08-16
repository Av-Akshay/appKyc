import React from "react";

import { InfrastructureServices, ServicesOffer } from "../components";
import { serviceBanner } from "../utils/icons";
import Technologies from "../components/service/Technologies";

const Services = () => {
  const style = {
    background: `url(${serviceBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="font-serif">
      <div
        style={style}
        className="animate-rightSlider leading-10 z-0 relative h-[90vh] w-full after:z-[-1] after:h-full after:w-full after:left-0 after:top-0 after:bg-[rgba(0,0,0,0.9)] after:absolute"
      >
        <h1 className="text-white z-10 absolute top-1/2 -translate-y-1/2 capitalize font-bold left-[8%]">
          <span className="text-5xl text-orange-400 tracking-widest hover:tracking-normal transition-all">
            Comprehensive
          </span>
          <br />
          <span className="hover:tracking-normal tracking-wide transition-all">
            Solutions for Your Needs
          </span>
        </h1>
      </div>
      <ServicesOffer />
      <Technologies />
      <InfrastructureServices />
    </div>
  );
};

export default Services;
