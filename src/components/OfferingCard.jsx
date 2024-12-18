import React from "react";

const OfferingCard = ({ text, className }) => {
  return (
    <div
      className={`bg-white w-[16rem] px-5 rounded-lg h-[16rem] text-section-background capitalize font-poppinsSemibold flex items-center justify-center ${className}`}
    >
      <p className="text-center">{text}</p>
    </div>
  );
};

export default OfferingCard;
