import React from "react";

const ServiceCard = ({ title, text, pic, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-5 w-4/5 m-auto ${className}`}
    >
      <img className="max-sm:w-28" src={pic} alt={title} />
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-[#000000] font-poppinsSemibold text-2xl">
          {" "}
          {title}{" "}
        </h1>
        <p className="font-poppinsExtraLight text-[#000000] text-center text-sm">
          {" "}
          {text}{" "}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
