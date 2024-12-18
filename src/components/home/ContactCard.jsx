import React from "react";

const ContactCard = ({ pic, title, text, className }) => {
  return (
    <div
      className={`bg-section-background px-5 py-10 flex flex-col items-center justify-center gap-5 max-sm:gap-2 ${className}`}
    >
      <img
        className="w-24 h-24 max-sm:w-20 max-sm:h-20"
        src={pic}
        alt={title}
      />
      <h1 className="text-white font-poppinsMedium text-2xl max-sm:text-xl capitalize">
        {" "}
        {title}{" "}
      </h1>
      <p className=" text-white font-poppinsRegular text-center"> {text} </p>
    </div>
  );
};

export default ContactCard;
