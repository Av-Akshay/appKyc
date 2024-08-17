import Aos from "aos";
import React, { useEffect } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";

const Quality = ({ item, index }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  });

  return (
    <div
      data-aos="flip-left"
      className={`flex items-center justify-center ${
        item.id === 1 ? "flex-row-reverse " : " "
      }w-full p-5 border border-dark rounded-2xl`}
    >
      <div className="w-3/5 flex flex-col justify-center gap-5">
        <h2 className="text-xl font-semibold"> {item.heading}</h2>
        <p>{item.content}</p>
      </div>
      <div className="w-2/5 flex items-center justify-center ">
        <img className="h-64 w-64 rounded-2xl" src={item.image_url} alt="" />
      </div>
    </div>
  );
};

export default Quality;
