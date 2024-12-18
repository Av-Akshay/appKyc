import React, { useState } from "react";

import { businessman } from "../utils/icons";
import { Button, Heading, OfferingCard } from "../components";
import { Link } from "react-router-dom";

const Career = () => {
  const [apply, setApply] = useState(false);
  return (
    <React.Fragment>
      <section className="grid grid-cols-2 grid-rows-1 place-content-center my-16 max-sm:grid-cols-1 max-sm:grid-rows-career">
        <div className="flex items-center justify-center w-3/5 m-auto max-md:w-full max-sm:order-2">
          <Heading
            text="Join our team at appKyc"
            className="text-5xl !leading-normal text-center capitalize max-md:text-3xl max-[400px]:text-xl"
          />
        </div>
        <div className="w-3/5 m-auto max-sm:order-1">
          <img
            className="shadow-lg shadow-gray-600 rounded-md"
            src={businessman}
            alt=""
          />
        </div>
      </section>
      <section className="relative w-full h-[55rem] max-[850px]:h-auto  flex items-center justify-between gap-5 max-[850px]:flex-col ">
        <div className=" absolute rotate-90 left-1/2 -top-14 -translate-x-1/2  w-[5%] border-dotted border-2 border-black">
          {" "}
        </div>
        <div className="flex w-[50%] h-full items-center flex-col justify-center gap-5 px-14 max-[850px]:w-11/12">
          <h2 className="text-3xl font-poppinsSemibold text-black max-sm:text-2xl max-[400px]:text-xl">
            {" "}
            Your Life At{" "}
          </h2>
          <h1 className="text-5xl text-them font-poppinsBold max-sm:text-3xl max-[400px]:text-2xl">
            {" "}
            AppKyc{" "}
          </h1>
          <h3 className="text-2xl text-center text-black font-poppinsSemibold max-sm:text-xl max-[400px]:text-lg">
            Find your favorite job with no pain and no gain
          </h3>
          <p className="text-sm font-poppinsRegular text-black text-center ">
            We owe our success to our passionate and dedicated team. We believe
            in nurturing relationships for creating a positive impact in our
            environment.
          </p>
        </div>
        <div className=" w-[50%] rotate-90 flex items-center justify-center flex-col gap-5 max-[850px]:rotate-0 max-[850px]:w-11/12">
          <div className="flex items-center justify-center gap-5 max-sm:flex-wrap">
            <OfferingCard
              text="Recognition & Rewards"
              className={
                "!bg-section-background !text-white -rotate-90 max-[850px]:rotate-0  !w-[12rem] !h-[12rem]"
              }
            />
            <OfferingCard
              text="Empowerment & Nurturing"
              className={
                "!bg-section-background !text-white -rotate-90 max-[850px]:rotate-0 !w-[12rem] !h-[12rem]"
              }
            />
          </div>
          <div className="flex items-center justify-center gap-5 max-sm:flex-wrap">
            <OfferingCard
              text="Recognition & Rewards"
              className={
                "!bg-section-background !text-white -rotate-90 max-[850px]:rotate-0 !w-[12rem] !h-[12rem] "
              }
            />
            <OfferingCard
              text="Empowerment & Nurturing"
              className={
                "!bg-section-background !text-white -rotate-90 max-[850px]:rotate-0 !w-[12rem] !h-[12rem]"
              }
            />
            <OfferingCard
              text="Empowerment & Nurturing"
              className={
                "!bg-section-background !text-white -rotate-90 max-[850px]:rotate-0 !w-[12rem] !h-[12rem]"
              }
            />
          </div>
        </div>
      </section>
      <section className="px-10">
        <Heading text="Our Openings" className="my-10 max-md:text-2xl" />
        <div className="w-11/12 m-auto flex flex-col gap-2">
          <div className="mb-5">
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="flex justify-between mt-5 max-md:flex-col-reverse max-md:gap-2">
              <div className=" flex flex-col gap-2 w-3/5 max-md:w-11/12 ">
                <Heading
                  text="mobile application developer"
                  className={"capitalize max-md:text-2xl"}
                />
                <p className="text-sm font-poppinsRegular">
                  <span className="text-black font-poppinsSemibold">
                    {" "}
                    Job Description:-{" "}
                  </span>
                  {`We seek a highly skilled Mobile Application ${"(Android & Ios)"} Developer to join our
                 dynamic development team`}
                </p>
              </div>
              <p className="text-black font-poppinsSemibold capitalize max-sm:text-xs">
                job location:-{" "}
                <span className="px-5 py-1 border border-section-background rounded-full max-md:text-xs max-md:px-3 ">
                  Dehradun
                </span>
              </p>
            </div>
            <div className="py-2 relative">
              <p className="text-sm font-poppinsRegular">
                Interested candidates are submit their resume at{" "}
                <Link
                  className="text-sm text-blue-500 border-b border-blue-500"
                  to="#"
                >
                  poojakycworld@gmail.com
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-300"></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Career;
