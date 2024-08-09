import React from "react";

import Input from "../utiles/Input";
import Button from "../utiles/Button";

const ContactUs = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="w-40%">
        <form action="">
          <Input type={"text"} placeholder={"Name"} className={"border"} />
          <Input type={"email"} placeholder={"Name"} className={"border"} />
          <textarea className="border w-full" name="" id=""></textarea>
          <Button text={"submit"} type={"submit"} />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default ContactUs;
