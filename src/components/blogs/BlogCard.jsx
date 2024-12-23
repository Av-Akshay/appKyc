import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ pic, title, text }) => {
  return (
    <div className="grid grid-rows-blogCard grid-cols-blogs overflow-hidden rounded-2xl">
      <div className="w-full">
        <img className="w-full" src={pic} alt="blog picture" />
      </div>
      <div className=" bg-section-background px-2 py-5 flex flex-col justify-center gap-5 ">
        <h2 className="text-white capitalize font-poppinsMedium text-2xl">
          {title}
        </h2>
        <p className="text-white text-sm font-poppinsExtraLight">
          {text.split(" ").slice(0, 50).join(" ")}...
        </p>
        <Link
          className="px-5 w-fit font-poppinsMedium py-2 rounded-full bg-white text-black hover:bg-gray-300 transition-all cursor-pointer capitalize"
          to="singleBlog"
        >
          Read Full blog
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
