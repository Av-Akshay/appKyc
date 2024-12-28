import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DetailCard = ({
  className1,
  className2,
  className3,
  number,
  detailType,
  text,
  pic,
  data,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200,
      once: true, // Animation happens only once
      mirror: false,
    });
  }, []);
  return (
    <div
      data-aos={data}
      className={`flex items-center justify-between overflow-hidden relative max-lg:flex-col max-lg:px-5 ${
        className2 && className2
      } `}
    >
      <div className="w-[35%] flex items-center justify-center max-lg:w-full">
        <img
          className="w-4/5 max-lg:w-60 max-[450px]:w-40"
          src={number}
          alt="strategy"
        />
      </div>
      <div
        className={`relative  bg-secondary-background w-[60%] flex gap-5 p-5 max-sm:p-2 rounded-3xl border-2 max-lg:w-full ${
          className1 ? className1 : className3
        } `}
      >
        <div
          className={`w-4/5 max-lg:w-full flex max-lg:items-center gap-5 max-sm:flex-col ${
            className2 && className2
          } `}
        >
          <img className="w-28 h-28" src={pic} alt={detailType} />
          <p
            className={`font-poppinsMedium max-sm:text-center text-lg mt-auto max-lg:mt-0  text-[#ffffff] max-sm:text-sm ${
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
