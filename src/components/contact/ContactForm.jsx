import React from "react";
import Input from "../Input";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="w-1/2  flex items-center justify-center animate-leftSlider">
      <form className=" w-4/5 flex flex-col gap-5">
        <Input
          type={"text"}
          placeholder={"Name"}
          className={"rounded-md border-black border-2 "}
        />
        <Input
          type={"email"}
          placeholder={"Email"}
          className={"rounded-md border-black border-2"}
        />
        <Input
          type={"text"}
          placeholder={"Subject"}
          className={"rounded-md border-black border-2"}
        />
        <textarea
          className="w-full rounded-md border-black border-2 px-5 py-2"
          placeholder="Message"
          rows={6}
          name="message"
        ></textarea>
        <Button
          text={"submit"}
          type={"submit"}
          className={"border-2 p-2 bg-[#d6bd8b]  border-dark text-dark"}
        />
      </form>
    </div>
  );
};

export default ContactForm;
