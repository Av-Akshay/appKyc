import React from "react";

const WorkCard = ({ heading, text, className }) => {
  return (
    <div
      className={`flex flex-col gap-2  justify-center bg-white rounded-lg ${className}`}
    >
      <h1 className="font-poppinsMedium text-lg text-black "> {heading} </h1>
      <p className="text-xs font-poppinsExtraLight text-black "> {text} </p>
    </div>
  );
};

export default WorkCard;
