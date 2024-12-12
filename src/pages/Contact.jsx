import React from "react";

import {
  icon_phone_call,
  write_us,
  call_us,
  contact_form,
  icon_write_us,
} from "../utils/icons";
import { ContactForm } from "../components";
import ContactCard from "../components/home/ContactCard";

const ContactUs = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" mb-5 cursor-pointer text-center relative text-black font-poppinsBold text-5xl after:content-[' '] after:w-1/2 after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:rounded-md after:absolute after:h-[0.35rem] after:bg-gray-300">
          Contact Us
        </h1>
        <p className="text-black font-poppinsExtraLight text-center mt-5 w-[33%]">
          We are here to help and answer any question you might here. We look
          forward to hearing from you.
        </p>
      </div>
      <div className="my-16 grid grid-cols-2 grid-rows-2">
        <div>
          <ContactCard
            pic={icon_phone_call}
            title={"call us"}
            text="support: +91 9015920156"
            className={"w-full h-full"}
          />
        </div>
        <div>
          <img className="w-full" src={call_us} alt="" />
        </div>
        <div>
          <img className="w-full" src={write_us} alt="" />
        </div>
        <div>
          <ContactCard
            pic={icon_write_us}
            title={"write us"}
            text="pooja.bandoria@appkyc.com"
            className={"w-full h-full"}
          />
        </div>
      </div>
      <div className="my-28">
        <h1 className="cursor-pointer text-center relative text-black font-poppinsBold text-5xl">
          Get in touch
        </h1>
        <div className="grid grid-cols-2 grid-rows-1 mt-28">
          <img
            className="w-full h-full"
            src={contact_form}
            alt="contact-form"
          />

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
