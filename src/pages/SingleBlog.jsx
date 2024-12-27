import React from "react";

import { Heading } from "../components";
import { brief_intro } from "../utils/icons";
import useSingleBlog from "../hooks/useSingleBlog";

const SingleBlog = () => {
  const { blogData, loading, message } = useSingleBlog();
  const date = new Date(blogData?.createdAt).toLocaleDateString();

  return (
    <>
      {loading ? (
        <h1 className="my-16 font-poppinsBold text-2xl text-black text-center">
          {" "}
          Loading...{" "}
        </h1>
      ) : (
        <>
          {message ? (
            <h1 className="text-red-500 my-16 font-poppinsBold text-2xl text-center">
              {message}
            </h1>
          ) : (
            <div className="w-11/12 m-auto my-10">
              <Heading text={blogData?.title} />
              <div className="my-2 flex items-center gap-2">
                <span className="text-sm font-poppinsExtraLight text-blue-400">
                  Author:- {blogData?.author}
                </span>
                ,
                <span className="text-sm font-poppinsExtraLight text-blue-400">
                  Date:- {date}
                </span>
              </div>
              <div className="w-full flex justify-center flex-col gap-5">
                <img
                  className="w-full h-[35vh]"
                  src={blogData?.image}
                  alt="blogPic"
                />
                <p className="font-poppinsExtraLight text-lg tracking-wider ">
                  {blogData?.content}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SingleBlog;
