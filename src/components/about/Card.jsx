import React from "react";

const Card = ({ className, image, text, heading }) => {
  return (
    <div
      className={`w-4/5 m-auto flex items-center justify-between ${className} `}
    >
      <div>
        <img className="w-[15rem] h-[15rem]" src={image} alt={heading} />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="inline-block underline font-semibold text-2xl">
          {heading}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
