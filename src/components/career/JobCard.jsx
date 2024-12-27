import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import Heading from "../Heading";

const JobCard = ({ item }) => {
  return (
    <>
      <div className="w-full h-[2px] bg-gray-300 max-md:mt-5"></div>
      <div className="flex flex-col mt-5">
        <div className=" flex items-center justify-between max-lg:flex-col max-lg:gap-2 max-lg:items-start">
          <Heading
            text={item?.title}
            className={"capitalize max-md:text-2xl max-sm:text-xl"}
          />
          <p className="text-black font-poppinsSemibold capitalize max-sm:text-xs">
            job location:-{" "}
            <span className="px-5 py-1 border border-section-background rounded-full max-md:text-xs max-md:px-2 ">
              {item?.location}
            </span>
          </p>
        </div>

        <div className="py-2">
          <div className="text-sm font-poppinsExtraLight">
            <span className="text-black font-poppinsSemibold">
              Job Description:-
            </span>
            <ReactMarkdown
              children={item?.description}
              remarkPlugins={[remarkGfm]}
              components={{
                ul: ({ children }) => (
                  <ul className="custom-ul text-sm !font-poppinsExtraLight">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="custom-ol text-sm !font-poppinsExtraLight">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="custom-li text-sm !font-poppinsExtraLight">
                    {children}
                  </li>
                ),
              }}
            />
            {/* <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {item.description}
            </ReactMarkdown> */}
          </div>
          <div className="text-sm font-poppinsRegular">
            Interested candidates are submit their resume at
            <span className="text-sm text-blue-500 border-b border-blue-500">
              poojakycworld@gmail.com
            </span>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
