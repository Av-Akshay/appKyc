import React from "react";

const ContactCard = ({ pic, title, text, className, imgClass }) => {
  return (
    <div
      className={`h-auto bg-section-background px-5 py-10 flex flex-col items-center justify-center gap-5 max-sm:gap-2 ${className}`}
    >
      <img
        className={`w-24 h-24 max-sm:w-16 max-sm:h-16 ${imgClass}`}
        src={pic}
        alt={title}
      />
      <h1 className="text-white font-poppinsMedium text-2xl capitalize max-sm:text-lg">
        {title}
      </h1>
      <p className=" text-white font-poppinsRegular text-center max-sm:text-xs">
        {" "}
        {text}{" "}
      </p>
    </div>
  );
};

export default ContactCard;
