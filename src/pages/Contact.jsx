import React from "react";

import {
  icon_phone_call,
  write_us,
  call_us,
  contact_form,
  icon_write_us,
} from "../utils/icons";
import { ContactForm, Meta } from "../components";
import ContactCard from "../components/home/ContactCard";
import metaData from "../utils/constants";

const ContactUs = () => {
  const { description, keywords, title } = metaData.contact;
  return (
    <React.Fragment>
      <Meta title={title} description={description} keywords={keywords} />
      <div className="w-11/12 m-auto">
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className=" mb-5 cursor-pointer text-center relative text-black font-poppinsBold text-5xl after:content-[' '] after:w-1/2 after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:rounded-md after:absolute after:h-[0.35rem] after:bg-gray-300 max-md:text-4xl max-sm:text-3xl">
            Contact Us
          </h1>
          <p className="text-black font-poppinsExtraLight text-center mt-5 w-[33%] max-md:w-full">
            We are here to help and answer any question you might here. We look
            forward to hearing from you.
          </p>
        </div>
        <div className="my-16 max-[880px]:w-3/5 m-auto grid grid-cols-2 grid-rows-2 max-[880px]:grid-rows-4 max-[880px]:grid-cols-1 max-[450px]:w-11/12">
          <ContactCard
            pic={icon_phone_call}
            title={"call us"}
            text="support: +91 9015920156"
            imgClass=" max-xl:!h-10 max-md:!h-6 "
            className={"max-lg:!gap-2 max-md:!gap-1 max-sm:py-5"}
          />
          <img className="w-full h-full" src={call_us} alt="" />
          <img
            className="w-full h-full max-[880px]:row-start-1 max-[880px]:row-end-2 max-[880px]:col-start-1 "
            src={write_us}
            alt="write"
          />
          <ContactCard
            pic={icon_write_us}
            title={"write us"}
            text="pooja.bhandoria@appkyc.com"
            imgClass=" max-xl:!h-10 max-md:!h-6 "
            className={"max-lg:!gap-2 max-md:!gap-1 max-sm:py-5"}
          />
        </div>
        <div className="my-28">
          <h1 className="cursor-pointer text-center relative text-black font-poppinsBold text-5xl max-md:text-4xl max-sm:text-3xl">
            Get in touch
          </h1>
          <div className="grid grid-cols-2 grid-rows-1 mt-28 max-lg:grid-cols-1 max-lg:grid-rows-2">
            <img
              className="w-full h-full"
              src={contact_form}
              alt="contact-form"
            />
            <ContactForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
