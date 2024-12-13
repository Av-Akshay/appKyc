import React from "react";

const ServicePageCard = ({
  subHeadingColor,
  pic,
  subheading,
  heading,
  pera,
  className,
}) => {
  return (
    <div className={`flex items-center justify-center ${className} `}>
      <div className="w-1/2 ">
        <img src={pic} alt={heading} />
      </div>
      <div
        className={`flex flex-col gap-2 w-1/2 ${
          !className ? "items-start " : " items-end "
        } `}
      >
        <div
          className={`flex flex-col gap-1 ${
            !className ? "items-start " : " items-end "
          }`}
        >
          <p className={`uppercase ${subHeadingColor}`}> {subheading} </p>
          <h2 className="uppercase text-black font-poppinsSemibold text-2xl ">
            {" "}
            {heading}{" "}
          </h2>
        </div>
        <p
          className={`text-black font-poppinsExtraLight ${
            !className ? "text-start " : " text-end "
          } `}
        >
          {" "}
          {pera}{" "}
        </p>
      </div>
    </div>
  );
};

export default ServicePageCard;
