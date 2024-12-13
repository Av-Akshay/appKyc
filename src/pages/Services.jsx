import React from "react";

import { ServicePageCard } from "../components";
import { app_service, uiux_service, web_service } from "../utils/icons";

const Services = () => {
  return (
    <div className=" w-11/12 m-auto">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" mb-5 uppercase cursor-pointer text-center relative text-black font-poppinsBold text-5xl after:content-[' '] after:w-1/2 after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:rounded-md after:absolute after:h-[0.35rem] after:bg-gray-300">
          our services
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" mb-5 cursor-pointer text-center relative text-black font-poppinsMedium text-5xl">
          what We Do
        </h1>
        <p className="text-black font-poppinsExtraLight text-center mt-5 w-[33%]">
          We offer full-funnel digital marketing, web design & development
          services to help businesses gain a competitive edge.
        </p>
      </div>
      <section className="flex flex-col gap-10">
        <ServicePageCard
          pic={uiux_service}
          subHeadingColor={"font-poppinsSemibold text-[#FF9900] "}
          heading="ui/ux design"
          subheading={"web design"}
          pera={
            "Launch Iconic Brands at the Intersection of Creativity and Technology."
          }
        />
        <ServicePageCard
          pic={web_service}
          subHeadingColor={"font-poppinsSemibold text-[#FF9900] "}
          heading="web development"
          subheading={"web develop"}
          pera={
            "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You."
          }
          className={"flex-row-reverse"}
        />
        <ServicePageCard
          pic={app_service}
          subHeadingColor={"font-poppinsSemibold text-[#FF9900] "}
          heading="app development"
          subheading={"app develop"}
          pera={
            "We are Visionaries. We are Coders. But Above All, We are Dedicated to Building Apps That Empower Your Brand's Success."
          }
        />
      </section>
    </div>
  );
};

export default Services;
