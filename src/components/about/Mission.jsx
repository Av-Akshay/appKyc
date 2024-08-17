import React from "react";
import { Quality } from "../index";
import { companyQuality } from "../../utils/constants";

const Mission = () => {
  return (
    <section className="py-10 font-serif w-4/5 m-auto">
      <div className="">
        <h1 className="text-5xl border-b-2 border-light font-bold tracking-widest">
          Our Mission
        </h1>
        <p className="font-medium leading-7 tracking-normal text-lg my-2">
          As we look to the future, our primary goal is to establish ourselves
          as a leading app and web development company. We are dedicated to
          building high-quality, innovative digital solutions that cater to both
          mobile and web platforms. Our vision includes not only expanding our
          expertise in app and web development but also launching a
          groundbreaking mobile application that will redefine user experiences.
          We are excited about the journey ahead and are focused on growing our
          company to meet the evolving needs of the digital world.
        </p>
      </div>
      <div className="flex items-center justify-between flex-col gap-8 my-10">
        {companyQuality?.map((item) => {
          return <Quality item={item} />;
        })}
      </div>
    </section>
  );
};

export default Mission;
