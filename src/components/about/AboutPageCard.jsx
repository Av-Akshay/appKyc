import React from "react";

const AboutPageCard = ({ pic, title, text }) => {
  return (
    <div className="p-5 flex items-center flex-col gap-5">
      <img src={pic} alt={title} />
      <h2 className="text-white font-poppinsMedium text-lg"> {title} </h2>
      <p className="font-poppinsExtraLight text-sm text-white text-center">
        {text}
      </p>
    </div>
  );
};

export default AboutPageCard;
