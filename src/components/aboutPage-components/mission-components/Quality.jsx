import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";

const Quality = ({ content, heading }) => {
  return (
    <div className="w-[28%] p-10 flex flex-col items-center text-white font-serif cursor-pointer z-20 justify-center gap-5 border-2 border-light  relative after:content-[' '] after:w-full after:absolute after:z-[-10] after:h-full after:top-0 after:left-0 after:bg-light hover:after:-top-8 hover:after:left-8 after:transition-all ">
      <HiOutlineLightBulb className="border-2 rounded-md border-white text-center text-5xl p-2 z-10" />
      <h1 className="text-2xl font-semibold ">{heading}</h1>
      <p className="text-center font-medium text-lg">{content}</p>
    </div>
  );
};

export default Quality;
