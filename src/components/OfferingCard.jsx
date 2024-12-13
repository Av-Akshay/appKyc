import React from "react";

const OfferingCard = ({ text, className }) => {
  return (
    <div
      className={`bg-white w-[16rem] rounded-lg h-[16rem] text-section-background capitalize font-poppinsSemibold flex items-center justify-center`}
    >
      <p className="text-center">{text}</p>
    </div>
  );
};

export default OfferingCard;
