import React from "react";
import { Link } from "react-router-dom";

import { Heading, BlogCard } from "../components";
import { blogPic } from "../utils/icons";

const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex items-center justify-between">
        <Heading
          text=" Watch out our latest blogs "
          className="capitalize !text-5xl"
        />
        <Link className="px-5 py-2 bg-black text-xl text-white rounded-lg font-poppinsSemibold">
          {" "}
          Post Blog{" "}
        </Link>
      </div>
      <section className="mt-16">
        <BlogCard
          pic={blogPic}
          title={"Top Marketing  Trends in 2023"}
          text="In 2023, to survive on more than just a unified, stronger relationship with consumers, brands 
will need to rely on empathy and authenticity, embrace personalization more fully, 
and use analytics for greater impact "
        />
      </section>
    </div>
  );
};

export default Blogs;
