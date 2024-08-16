import React from "react";
import kycLogo from "../assets/Images/kycLogo.png";
import { Mission, ContactForm } from "../components";

const About = () => {
  return (
    <div className="font-serif my-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center my-5 text-2xl font-semibold text-dark font-serif about_animation">
          About <span className="text-light"> Us </span>
        </h1>
      </div>
      <section className=" w-full bg-gray-200 relative py-10 my-5 animate-downToUp">
        <div className="w-11/12 m-auto flex items-center justify-between">
          <div className="w-2/5 flex items-center justify-center ">
            <img
              className=" w-[18rem] h-[18rem] hover:scale-[1.1] transition-all"
              src={kycLogo}
              alt="kyc logo"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center gap-5 ">
            <h1 className="relative cursor-pointer text-2xl font-bold after:transition-all after:hover:w-full after:content-[' '] after:absolute after:w-0 after:h-[0.15rem] after:left-0 after:bg-light after:top-full ">
              About Us
            </h1>
            <p className="font-medium text-center">
              <span className="text-light text-xl font-semibold">K</span>{" "}
              <span className="text-dark font-semibold">YC WORLD,</span> is a
              dynamic startup specializing in the development of cutting-edge
              mobile apps and web applications. We focus on providing innovative
              solutions that meet the evolving needs of businesses and consumers
              alike. Our expertise lies in crafting user-friendly, scalable, and
              secure digital products that drive growth and enhance customer
              experiences. At KYC World, we are committed to delivering
              excellence through technology, empowering our clients to stay
              ahead in a competitive digital landscape.
            </p>
          </div>
        </div>
      </section>
      <Mission />
      <div className="py-5 bg-lighter">
        <div className="text-center">
          <h1 className=" relative capitalize text-4xl font-semibold inline-block my-5 font-serif text-dark after:transition-all after:hover:w-full after:content-[' '] after:absolute after:w-0 after:h-[0.15rem] after:left-0 after:bg-light after:top-full ">
            Contact us
          </h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
