import React from "react";

import { appDev_page_img } from "../utils/icons";
import { Heading, OfferingCard, WorkCard, Meta } from "../components";
import metaData from "../utils/constants";

const AppDevPage = () => {
  const { description, keywords, title } = metaData.appService;
  return (
    <React.Fragment>
      <Meta title={title} description={description} keywords={keywords} />
      <div className="mt-14 w-11/12 m-auto grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2">
        <div className=" w-4/5 m-auto flex flex-col gap-10 items-center justify-center max-md:order-2">
          <Heading text="App development" className="border-b border-black" />
          <p className="text-center font-poppinsExtraLight text-xl">
            We are Visionaries. We are Coders. But Above All, We are Dedicated
            to Building Apps That Empower Your Brand's Success !!!
          </p>
          {/* <Button type={"button"} text="see more" className={"px-5"} /> */}
        </div>
        <div className="max-md:order-1">
          <img
            className="w-3/5 m-auto"
            src={appDev_page_img}
            alt="app development"
          />
        </div>
      </div>
      <section className="mt-14 px-5 py-20 bg-section-background flex flex-col gap-5">
        <div className="w-11/12 m-auto mb-5">
          <Heading
            text="What are we offering"
            className="!text-white font-poppinsSemibold max-sm:text-center"
          />
        </div>
        <div className="w-11/12 m-auto flex items-center flex-wrap gap-5 justify-between max-xl:justify-center max-xl:gap-10">
          <OfferingCard text="Crafting Dynamic and Scalable Applications with React Native and Flutter (Android and Ios) for Seamless User Experiences" />
          <OfferingCard text="Cross-Platform Development" />
          <OfferingCard text="UI/UX Design" />
          <OfferingCard text="Prototyping and Wireframing" />
        </div>
      </section>
      <section className="mt-14 px-5 py-20 bg-[#F3F3F3] flex flex-col gap-5">
        <Heading
          text="Our Strengths"
          className="font-poppinsSemibold text-4xl max-md:text-3xl max-sm:text-2xl"
        />
        <ul className="list-disc ml-10">
          <li className="text-xl font-poppinsExtraLight">
            Approx 1 years of rendering excellent App Development solutions.
          </li>
          <li className="text-xl font-poppinsExtraLight">
            40+ projects successfully delivered.
          </li>
          <li className="text-xl font-poppinsExtraLight">
            10 applications management.
          </li>
          <li className="text-xl font-poppinsExtraLight">
            Dedicated Project Manager.
          </li>
        </ul>
      </section>
      <section className=" py-20 my-14 bg-section-background flex flex-col gap-10 ">
        <div className="flex items-center justify-center">
          <Heading
            text="How App Kyc Works"
            className="text-4xl !text-white relative after:contents-[' '] after:absolute after:w-1/2 after:h-1 after:bg-white after:-bottom-4 after:left-1/2 after:-translate-x-1/2 "
          />
        </div>
        <div className="grid grid-cols-3 gap-5 grid-rows-1 w-11/12 m-auto max-lg:grid-cols-2 max-lg:grid-rows-2 max-[550px]:grid-rows-3 max-[550px]:grid-cols-1">
          <WorkCard
            className="w-[30%] px-10 h-[12rem] max-[550px]:text-center"
            heading={"Product Research & Strategy"}
            text="We begin our journey by analyzing your business 
            objectives and end-user requirements to create a 
            draft of Low-Fidelity Wireframes."
          />
          <WorkCard
            className="w-[30%] px-10 h-[12rem] max-[550px]:text-center"
            heading={"Product Conceptualization"}
            text="Succeeding the approval of the Low-Fidelity 
            Wireframes, our Design Thinking team creates 
            High-Fidelity Wireframes for your review and 
            feedback."
          />
          <WorkCard
            className="w-[30%] px-10 h-[12rem] max-lg:col-span-2 max-lg:text-center max-[550px]:col-span-1"
            heading={"Development"}
            text="We use Agile methodology to collaborate and 
            iterate on the product design and development 
            until we achieve flawless UX/UI functionality and 
            experience."
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default AppDevPage;
