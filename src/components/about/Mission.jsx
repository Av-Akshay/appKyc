import React from "react";
import { Quality } from "../index";
import { companyQuality } from "../../utils/constants";

const Mission = () => {
  return (
    <section className="w-full py-10 font-serif">
      <div className="w-11/12 m-auto">
        <h1 className="text-5xl border-b-2 border-light font-bold tracking-widest">
          Our Mission
        </h1>
        <p className="font-medium leading-7 tracking-normal text-lg my-2">
          Our mission is at the heart of our journey led by our core values:
          Connect, Innovate, and Collaborate. These values not only guide our
          every action but serve as the foundation upon which we build a
          thriving community, fostering a culture of connectivity and innovation
          that leaves a lasting impact on the world we live in.
        </p>
      </div>
      <div className="flex items-center justify-between w-11/12 m-auto my-10">
        {companyQuality?.map((item) => {
          return <Quality content={item.pera} heading={item.heading} />;
        })}
      </div>
    </section>
  );
};

export default Mission;
