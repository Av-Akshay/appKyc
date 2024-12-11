import React from "react";

import { uiUx, webDevelopment, appDevelopment } from "../../utils/icons";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <div className="relative ">
      <div className=" absolute rotate-90 left-1/2 -top-20 -translate-x-1/2 w-24 border-dotted border-2 border-black">
        {" "}
      </div>
      <div className="w-1/2 mx-auto flex items-center justify-center my-40 ">
        <h1 className=" text-balance font-semibold text-center text-3xl text-slate-950">
          {" "}
          We are one of the most effective Web & App Development Company{" "}
        </h1>
      </div>
      <div className=" absolute rotate-90 left-1/2 -bottom-20 -translate-x-1/2 w-24 border-dotted border-2 border-black">
        {" "}
      </div>
      <div className="grid grid-cols-3 grid-rows-1">
        <ServiceCard
          pic={uiUx}
          text="Our Design Thinking team conceptualizes intuitive, engaging, and 
          aesthetically attractive User Interface (UI) design that 
          offers seamless User Experience (UX) across the web 
          and mobile devices for your audience."
          title={"UI/UX Design"}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
