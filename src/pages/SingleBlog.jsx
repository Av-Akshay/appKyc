import React from "react";

import { Heading } from "../components";
import { brief_intro } from "../utils/icons";

const SingleBlog = () => {
  return (
    <div className="w-11/12 m-auto my-10">
      <Heading text="Top Marketing Trends in 2023" />
      <div className="my-2 flex items-center gap-2">
        <span className="text-sm font-poppinsExtraLight text-blue-400">
          Author Name
        </span>
        ,
        <span className="text-sm font-poppinsExtraLight text-blue-400">
          Date
        </span>
      </div>
      <div className="w-full flex justify-center flex-col gap-5">
        <img className="w-full h-[30vh]" src={brief_intro} alt="blogPic" />
        <p className="font-poppinsExtraLight text-lg tracking-wider ">
          In 2023, to survive on more than just a unified, stronger relationship
          with consumers, brands will need to rely on empathy and authenticity,
          embrace personalization more fully, and use analytics for greater
          impact. In 2023, to survive on more than just a unified, stronger
          relationship with consumers, brands will need to rely on empathy and
          authenticity, embrace personalization more fully, and use analytics
          for greater impact. In 2023, to survive on more than just a unified,
          stronger relationship with consumers, brands will need to rely on
          empathy and authenticity, embrace personalization more fully, and use
          analytics for greater impact. In 2023, to survive on more than just a
          unified, stronger relationship with consumers, brands will need to
          rely on empathy and authenticity, embrace personalization more fully,
          and use analytics for greater impact.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
