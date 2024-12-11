import React from "react";
import {
  ContactSection,
  DetailSection,
  HeroSection,
  ServiceSection,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ServiceSection />
      <DetailSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default Home;
