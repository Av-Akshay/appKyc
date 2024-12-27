import React from "react";
import { Link } from "react-router-dom";

import { Heading, BlogCard } from "../components";
import { blogPic } from "../utils/icons";
// import usePostBlog from "../hooks/usePostBlog";
import useBlog from "../hooks/useBlog";

const Blogs = () => {
  const { getMessage, blogs, loading } = useBlog();
  return (
    <>
      {loading ? (
        <h1 className="my-16 font-poppinsBold text-2xl text-black text-center">
          {" "}
          Loading...{" "}
        </h1>
      ) : (
        <>
          {getMessage ? (
            <h1 className="text-red-500 my-16 font-poppinsBold text-2xl text-center">
              {getMessage}
            </h1>
          ) : (
            <div className="w-11/12 mx-auto my-10">
              <div className="flex items-center justify-between">
                <Heading
                  text=" Watch out our latest blogs "
                  className="capitalize !text-5xl"
                />
                <Link
                  to="/post-blog"
                  className="px-5 py-2 bg-black text-xl text-white rounded-lg font-poppinsSemibold"
                >
                  Post Blogs
                </Link>
              </div>
              <section className="mt-16 flex flex-col gap-5">
                {blogs?.map((items) => {
                  return (
                    <BlogCard
                      key={items?._id}
                      pic={items?.image}
                      title={items?.title}
                      text={items?.content}
                      id={items._id}
                    />
                  );
                })}
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Blogs;
