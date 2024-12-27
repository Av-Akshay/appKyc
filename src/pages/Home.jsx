import React from "react";
import {
  ContactSection,
  DetailSection,
  HeroSection,
  ServiceSection,
  Meta,
} from "../components";
import metaData from "../utils/constants";

const Home = () => {
  const { title, description, keywords } = metaData?.home;

  return (
    <React.Fragment>
      <Meta title={title} description={description} keywords={keywords} />
      <HeroSection />
      <ServiceSection />
      <DetailSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default Home;
