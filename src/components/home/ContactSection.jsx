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
      <div className="flex items-center justify-center gap-10 mt-10">
        <ContactCard
          pic={call}
          title="Call Us"
          text=" Contact Number :- (+91) 1234567890 "
        />
        <ContactCard
          pic={write}
          title="Write Us"
          text=" Email:- user@gmail.com "
        />
      </div>
    </div>
  );
};

export default ContactSection;
