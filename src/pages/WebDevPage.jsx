import React from "react";

import { uiux_page_img } from "../utils/icons";
import { Heading, Button, OfferingCard, WorkCard } from "../components";

const WebDevPage = () => {
  return (
    <React.Fragment>
      <div className="mt-14 w-11/12 m-auto grid grid-cols-2 grid-rows-1">
        <div className=" w-4/5 m-auto flex flex-col gap-10 items-center justify-center">
          <Heading
            text="UI/UX Designing"
            className="border-b border-black pb-1"
          />
          <p className="text-center font-poppinsExtraLight text-xl">
            {" "}
            Launch Iconic Brands at the Intersection of Creativity and
            Technology!!!{" "}
          </p>
          <Button type={"button"} text="see more" className={"px-5"} />
        </div>
        <div>
          <img className="w-3/5 m-auto" src={uiux_page_img} alt="uiux" />
        </div>
      </div>
      <section className="mt-14 px-5 py-20 bg-section-background flex flex-col gap-5">
        <div className="w-11/12 m-auto mb-5">
          <Heading
            text="What are we offering"
            className="!text-white font-poppinsSemibold"
          />
        </div>
        <div className="w-11/12 m-auto flex items-center flex-wrap gap-5 justify-between">
          <OfferingCard text="Information Architecture" />
          <OfferingCard text="design system" />
          <OfferingCard text="flow maps" />
          <OfferingCard text="low-fidelity hight-fidelity wireframes" />
        </div>
      </section>
      <section className="mt-14 px-5 py-20 bg-[#F3F3F3] flex flex-col gap-5">
        <Heading
          text="Our Strengths"
          className="font-poppinsSemibold text-4xl"
        />
        <ul className="list-disc ml-10">
          <li className="text-xl font-poppinsExtraLight">
            {" "}
            Profile audience and create user stories at an early stage.{" "}
          </li>
          <li className="text-xl font-poppinsExtraLight">
            {" "}
            Analyze and draft the complexity of the project and time frame
            before brainstorming with the customer.
          </li>
          <li className="text-xl font-poppinsExtraLight">
            {" "}
            Focus on the product goal and design, simultaneously.{" "}
          </li>
          <li className="text-xl font-poppinsExtraLight">
            {" "}
            Our Design Thinking team works in collaboration with the web
            development team to build and deliver projects, promptly. {" "}
          </li>
        </ul>
      </section>
      <section className=" py-20 my-14 bg-section-background flex flex-col gap-10 ">
        <div className="flex items-center justify-center">
          <Heading
            text="How AppKyc Works"
            className="text-4xl !text-white relative after:contents-[' '] after:absolute after:w-1/2 after:h-1 after:bg-white after:-bottom-4 after:left-1/2 after:-translate-x-1/2 "
          />
        </div>
        <div className="flex items-center justify-between gap-5 flex-wrap w-11/12 m-auto ">
          <WorkCard
            className="w-[30%] px-10 h-[12rem]"
            heading={"Product Research & Strategy"}
            text="We begin our journey by analyzing your business 
            objectives and end-user requirements to create a 
            draft of Low-Fidelity Wireframes."
          />
          <WorkCard
            className="w-[30%] px-10 h-[12rem]"
            heading={"Product Conceptualization"}
            text="Succeeding the approval of the Low-Fidelity 
            Wireframes, our Design Thinking team creates 
            High-Fidelity Wireframes for your review and 
            feedback."
          />
          <WorkCard
            className="w-[30%] px-10 h-[12rem]"
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

export default WebDevPage;
