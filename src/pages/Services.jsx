import React from "react";

const Services = () => {
  return (
    <div className="font-serif">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" mb-5 uppercase cursor-pointer text-center relative text-black font-poppinsBold text-5xl after:content-[' '] after:w-1/2 after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:rounded-md after:absolute after:h-[0.35rem] after:bg-gray-300">
          our services
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" mb-5 cursor-pointer text-center relative text-black font-poppinsBold text-5xl">
          Contact Us
        </h1>
        <p className="text-black font-poppinsExtraLight text-center mt-5 w-[33%]">
          We are here to help and answer any question you might here. We look
          forward to hearing from you.
        </p>
      </div>
    </div>
  );
};

export default Services;
