import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { uiUx, webDevelopment, appDevelopment } from "../../utils/icons";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200,
      once: true, // Animation happens only once
      mirror: false,
    });
  }, []);
  return (
    <div className="pb-36 relative max-md:pb-10">
      <div className=" relative">
        <div className=" absolute rotate-90 left-1/2 -top-20 -translate-x-1/2  w-[6%] max-md:w-[10%] border-dotted border-2 border-black">
          {" "}
        </div>
        <div className="w-1/2 mx-auto flex items-center justify-center my-40 max-sm:my-28 ">
          <h1
            data-aos="zoom-in"
            className=" text-balance font-semibold text-center text-3xl text-slate-950 max-sm:text-xl"
          >
            {" "}
            We are one of the most effective Web & App Development Company{" "}
          </h1>
        </div>
        <div className=" absolute rotate-90 left-1/2 -bottom-20 -translate-x-1/2 w-[6%] max-md:w-[10%] border-dotted border-2 border-black">
          {" "}
        </div>
      </div>
      <div className="relative grid grid-cols-3 grid-rows-1 max-md:grid-cols-2 max-md:grid-rows-2 max-[500px]:grid-cols-1 max-[500px]:grid-rows-3   ">
        <ServiceCard
          pic={uiUx}
          text="Our Design Thinking team conceptualizes intuitive, engaging, and 
          aesthetically attractive User Interface (UI) design that 
          offers seamless User Experience (UX) across the web 
          and mobile devices for your audience."
          title={"UI/UX Design"}
          className={"h-[25rem]"}
        />
        <ServiceCard
          pic={webDevelopment}
          text="We are Creative Nerds. We are Technocrats. 
                But We are Passionate about creating a 
                Successful Brand for You!!!"
          title={"Web Development"}
          className={"h-[25rem]"}
        />
        <ServiceCard
          className={
            "max-md:col-start-1 max-md:col-end-3 max-md:row-start-2 h-[25rem] max-[500px]:col-start-1 max-[500px]:col-end-2 max-[500px]:row-start-3 "
          }
          pic={appDevelopment}
          text="Nurture Your Vision, Magnify Your Brand & Increase 
                The Quality Of You App With Us."
          title={"App Development"}
        />
        <div className="absolute rotate-90 left-1/2 -bottom-[18%] max-md:bottom-5 -translate-x-1/2 w-[6%] max-md:w-[10%] border-dotted border-2 border-black"></div>
      </div>
    </div>
  );
};

export default ServiceSection;
