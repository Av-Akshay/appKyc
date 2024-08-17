import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import { CompanyContact, ContactForm } from "../components";

const ContactUs = () => {
  return (
    <div className="h-[90vh] w-11/12 m-auto flex items-center justify-center overflow-hidden">
      <CompanyContact />
      <ContactForm className={" w-[48%]"} />
    </div>
  );
};

export default ContactUs;
