import React from "react";

const DetailCard = ({
  className1,
  className2,
  className3,
  number,
  detailType,
  text,
  pic,
}) => {
  return (
    <div
      className={`flex items-center justify-between overflow-hidden relative ${
        className2 && className2
      } `}
    >
      <div className="w-[35%] flex items-center justify-center">
        <img className="w-4/5" src={number} alt="strategy" />
      </div>
      <div
        className={`relative  bg-secondary-background w-[60%] flex gap-5 p-5 rounded-3xl border-2 ${
          className1 ? className1 : className3
        } `}
      >
        <div className={`w-4/5 flex gap-5 ${className2 && className2} `}>
          <img className="w-28 h-28" src={pic} alt={detailType} />
          <p
            className={`font-poppinsMedium text-lg mt-auto  text-[#ffffff] ${
              className2 ? " text-end" : "text-start"
            } `}
          >
            {" "}
            {text}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
