import React from "react";

import { technologiesBackground } from "../../utils/icons";

const Technologies = () => {
  return (
    <div
      style={{ background: `url(${technologiesBackground})` }}
      className="my-10 bg-cover bg-center bg-no-repeat z-0 py-5 relative after:z-[-1] after:h-full after:w-full after:left-0 after:top-0 after:bg-[rgba(0,0,0,0.9)] after:absolute"
    >
      <div className="text-center">
        <h1 className=" relative capitalize text-4xl font-semibold inline-block my-5 font-serif text-lighter after:transition-all after:hover:w-full after:content-[' '] after:absolute after:w-0 after:h-[0.15rem] after:left-0 after:bg-light after:top-full ">
          Technologies we work on
        </h1>
        <div className="grid place-content-center grid-cols-2 grid-rows-2">
          <div className="flex items-center gap-5 flex-col justify-center py-5">
            <h2 className="text-lighter font-semibold">
              Web Development Technologies
            </h2>
            <div className="flex items-center gap-5 ">
              <img
                className="w-32 "
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt=""
              />
              <img
                className="w-32 "
                src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp"
                alt=""
              />
            </div>
          </div>
          <div className=" text-center py-5">
            <h2 className="text-lighter font-semibold">
              App Development Technologies
            </h2>
            <div className="flex items-center justify-center gap-5 mt-5">
              <img
                className=" w-36 h-32 "
                src="https://cdn.prod.website-files.com/62c6fbddb12bb54622241c3d/62c6fbddb12bb57fe22423d5_React_img1.png"
                alt=""
              />
              <img
                className="w-36 h-28 "
                src="https://storage.googleapis.com/cms-storage-bucket/6e19fee6b47b36ca613f.png"
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-lighter font-semibold">
              Backend Development Technologies
            </h2>
            <div className="flex items-center justify-center gap-5 mt-5">
              <img
                className="w-36 h-32 "
                src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-lighter font-semibold">
              Database Technologies
            </h2>
            <div className="flex items-center justify-center gap-5 mt-5">
              <img
                className="h-32 "
                src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png"
                alt=""
              />
              <img
                className="h-32 "
                src="https://cdn.iconscout.com/icon/free/png-256/free-firebase-1-282796.png?f=webp&w=256"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
