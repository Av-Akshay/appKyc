import React from "react";

import ContactCard from "./ContactCard";
import { call, write } from "../../utils/icons";

const ContactSection = () => {
  return (
    <div className="my-14">
      <h1 className="text-slate-950 font-poppinsBold text-3xl text-center">
        {" "}
        Get in Touch{" "}
      </h1>
      <div className="overflow-hidden flex items-center justify-center gap-10 max-sm:gap-5 max-sm:flex-col mt-10">
        <ContactCard
          data={"slide-right"}
          className={
            "w-[26%] rounded-3xl h-[20rem] max-lg:w-2/5 max-sm:w-2/3 max-[400px]:w-11/12 max-sm:h-[16rem]"
          }
          pic={call}
          title="Call Us"
          text="Phone :- (+91) 9015920156"
        />
        <ContactCard
          data="slide-left"
          className={
            "w-[26%] rounded-3xl h-[20rem] max-lg:w-2/5 max-sm:w-2/3 max-[400px]:w-11/12 max-sm:h-[16rem]"
          }
          pic={write}
          title="Write Us"
          text="Email :- pooja.bandoria@appkyc.com"
        />
      </div>
    </div>
  );
};

export default ContactSection;
