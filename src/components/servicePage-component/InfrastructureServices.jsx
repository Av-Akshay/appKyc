import React from "react";
import { serviceProvidedCards } from "../../constant/ConstantInfo";
import Card from "./infrastructure-component/Card";

const InfrastructureServices = () => {
  return (
    <section className="bg-[#d6bd8b] py-10">
      <div className="w-11/12 m-auto flex items-baseline justify-center gap-10 flex-wrap ">
        {serviceProvidedCards.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default InfrastructureServices;
