import React from "react";
import { SectionFirst, SectionSecond } from "../components";

const Home = () => {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center bg-gray-200">
      <div className="w-1/2 h-full">
        <SectionFirst />
      </div>
      <div className="w/2">
        <SectionSecond />
      </div>
    </div>
  );
};

export default Home;
