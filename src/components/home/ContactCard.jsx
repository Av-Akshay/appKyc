import React from "react";

const ContactCard = ({ pic, title, text }) => {
  return (
    <div className="w-[26%] rounded-3xl bg-section-background px-5 py-10 flex flex-col items-center gap-5 ">
      <img className="w-24 h-24" src={pic} alt={title} />
      <h1 className="text-white font-poppinsMedium text-2xl capitalize">
        {" "}
        {title}{" "}
      </h1>
      <p className=" text-white font-poppinsRegular text-center"> {text} </p>
    </div>
  );
};

export default ContactCard;
