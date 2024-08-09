import React from "react";

const Card = ({ item }) => {
  return (
    <div className="border border-black p-5 w-[30%] h-[26rem] rounded-md">
      <img className="w-full" src={item.pic} alt={item.heading} />
      <div className="flex flex-col gap-2 mt-2">
        <h1 className="font-bold text-2xl capitalize text-slate-950 ">
          {item.heading}
        </h1>
        <p className="font-medium text-dark">{item.text}</p>
      </div>
    </div>
  );
};

export default Card;
