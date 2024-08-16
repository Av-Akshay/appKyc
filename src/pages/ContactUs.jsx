import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import { CompanyContact, ContactForm } from "../components";

const ContactUs = () => {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <CompanyContact />
      <ContactForm className={" animate-leftSlider w-1/2"} />
    </div>
  );
};

export default ContactUs;
