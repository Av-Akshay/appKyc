import React from "react";

const AboutPageCard = ({ pic, title, text, className }) => {
  return (
    <div className={`p-5 flex items-center flex-col gap-5 ${className}`}>
      <img className="max-sm:w-24" src={pic} alt={title} />
      <h2 className="text-white font-poppinsMedium text-lg text-center">
        {" "}
        {title}{" "}
      </h2>
      <p className="font-poppinsExtraLight text-sm text-white text-center">
        {text}
      </p>
    </div>
  );
};

export default AboutPageCard;
