import React from "react";

import metaData from "../utils/constants";
import { vision, owenship, ethic, think, brief_intro } from "../utils/icons";
import { Heading, AboutPageCard, Meta } from "../components";

const About = () => {
  const { title, description, keywords } = metaData?.about;
  return (
    <React.Fragment>
      <Meta title={title} description={description} keywords={keywords} />
      <div className="flex flex-col items-center justify-center my-10 px-5">
        <Heading
          text="About Us"
          className="uppercase relative after:contents-[' '] after:absolute after:h-1 after:w-1/2 after:-translate-x-1/2 after:-bottom-5 after:left-1/2 after:bg-gray-300 after:rounded-lg"
        />
        <p className="my-10 font-poppinsExtraLight leading-7 text-sm tracking-wide text-center">
          AppKyc- Committed to Creating Successful Entrepreneurs and Brands!!!
        </p>
      </div>
      {/* -------------------brief introduction section------------------------------------ */}
      <section className="w-11/12 m-auto relative my-16">
        <div className=" absolute rotate-90 left-1/2 -top-14 -translate-x-1/2  w-[5%] border-dotted border-2 border-black">
          {" "}
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center rounded-xl"
          style={{
            backgroundImage: `url(${brief_intro})`,
          }}
        >
          <div className="py-10 flex flex-col items-center gap-10 w-11/12 m-auto ">
            <Heading
              text="A brief introduction what we do"
              className="capitalize text-3xl text-center tracking-wider !text-gray-700"
            />
            <p className="font-poppinsExtraLight text-lg tracking-wider text-gray-700">
              <span className="text-them text-2xl font-poppinsBold">
                {" "}
                AppKyc{" "}
              </span>
              is a dynamic team specializing in the development of cutting-edge
              mobile apps and web applications. We focus on providing innovative
              solutions that meet the evolving needs of businesses and consumers
              alike. Our expertise lies in crafting user-friendly, scalable, and
              secure digital products that drive growth and enhance customer
              experiences. At AppKyc, we are committed to delivering excellence
              through technology, empowering our clients to stay ahead in a
              competitive digital landscape.
            </p>
          </div>
        </div>
        <div className=" absolute rotate-90 left-1/2 -bottom-14 -translate-x-1/2  w-[5%] border-dotted border-2 border-black">
          {" "}
        </div>
      </section>

      {/*----------------------------------- why are we here section------------------------- */}
      <section className=" w-11/12 m-auto ">
        <div className="py-10 flex flex-col items-center gap-10 w-11/12 m-auto ">
          <Heading
            text="Why are we here ? "
            className=" text-3xl text-center tracking-wider !text-gray-700"
          />
        </div>
        <div className="flex items-center flex-col gap-5">
          <p className="text-base font-poppinsRegular tracking-wider text-center leading-7 ">
            Founded in July 2022, AppKYC stands at the intersection of
            innovation and digital transformation. Our passionate team of tech
            innovators, marketing strategists, and business growth experts has
            successfully guided many organizations - from ambitious startups to
            established enterprises - in reimagining their digital presence. We
            craft data-driven marketing and software solutions that put
            customers at the heart of every strategy, helping businesses not
            just adapt to the digital landscape, but thrive in it. Through our
            tailored approach to brand development, demand generation, and
            customer journey optimization, we've consistently helped our clients
            achieve remarkable growth in market presence, conversion rates, and
            revenue streams, establishing ourselves as a trusted partner in
            their digital evolution.
          </p>
        </div>
      </section>

      {/*----------------------------our vision section------------------------------------------------ */}

      <section
        style={{ backgroundImage: `url(${vision})` }}
        className="w-11/12 m-auto bg-cover bg-no-repeat bg-center rounded-xl py-10 px-5 my-14 flex flex-col gap-3"
      >
        <Heading
          text="Our Vision"
          className="!text-gray-700 max-sm:text-center"
        />
        <p className="font-poppinsMedium text-lg text-gray-700 tracking-wider">
          We seek to create innovative yet profitable solutions for businesses
          that spell SUCCESS.
        </p>
      </section>

      {/* --------------------------why choose appkyc */}
      <section className="bg-section-background mt-28 relative py-10 px-5">
        <div className=" absolute rotate-90 left-1/2 -top-14 -translate-x-1/2  w-[5%] border-dotted border-2 border-black">
          {" "}
        </div>
        <Heading
          text="Why choose AppKyc ?"
          className="!text-white max-md:text-center"
        />
        <div className="grid grid-cols-3 grid-rows-1 mt-5 max-md:grid-cols-2 max-md:grid-rows-2 max-[550px]:grid-cols-1 max-[550px]:grid-rows-3 ">
          <AboutPageCard
            pic={owenship}
            title="Ownership"
            text="We take full responsibility for our actions. We apologize for 
          our mistakes and work with more sincerity and 
          dedication to delight our customers."
          />
          <AboutPageCard
            pic={think}
            title="Think Smarter and Bigger"
            text="We constantly strive for improvement and growth. 
            We embrace change, adopt it, and find solutions to 
            improve ourselves."
          />
          <AboutPageCard
            pic={ethic}
            className={"max-md:col-span-2 max-[550px]:col-span-1"}
            title="Work Ethic"
            text="We are proactive, organized, result-driven, and prompt 
            because we expect high performance from ourselves. 
            Consequently, we regularly invest in training to create a 
            highly skilled and efficient talent pool."
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
