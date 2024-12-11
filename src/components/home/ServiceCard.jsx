import React from "react";

const ServiceCard = ({ title, text, pic }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={pic} alt={title} />
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-[#000000] font-poppinsRegular"> {title} </h1>
        <p className="font-poppinsExtraLight text-[#000000] text-center">
          {" "}
          {text}{" "}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
