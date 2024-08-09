import React from "react";
import { serviceProvidedCards } from "../../utils/constants";
import { Card } from "../index";

const InfrastructureServices = () => {
  return (
    <section className="bg-[#d6bd8b] py-10">
      <h1 className="text-5xl mb-10 cursor-pointer text-center font-bold">
        Infrastructure Services
      </h1>
      <div className="w-11/12 m-auto flex items-baseline justify-center gap-10 flex-wrap ">
        {serviceProvidedCards.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default InfrastructureServices;
