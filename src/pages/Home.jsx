import React from "react";
import { DetailSection, HeroSection, ServiceSection } from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ServiceSection />
      <DetailSection />
    </React.Fragment>
  );
};

export default Home;
