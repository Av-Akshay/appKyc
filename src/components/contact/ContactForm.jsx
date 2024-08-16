import React from "react";
import Input from "../Input";
import Button from "../Button";
import useContact from "../../hooks/useContact";

const ContactForm = ({ className }) => {
  const { register, handleSubmit, errors, handelSubmitForm } = useContact();
  return (
    <div className={` flex items-center justify-center ${className}`}>
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className=" w-4/5 flex flex-col gap-5"
      >
        <Input
          type={"text"}
          placeholder={"Name"}
          className={"rounded-md border-black border-2 "}
          {...register("userName", {
            required: true,
          })}
        />
        {errors.userName && <p>All Fields Are Required</p>}
        <Input
          type={"email"}
          placeholder={"Email"}
          className={"rounded-md border-black border-2"}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors?.email?.message}</p>
        )}
        <Input
          type={"text"}
          placeholder={"Subject"}
          className={"rounded-md border-black border-2 "}
          {...register("subject", {
            required: true,
          })}
        />
        {errors.subject && <p>All Fields Are Required</p>}
        <textarea
          className="w-full rounded-md border-black border-2 px-5 py-2"
          placeholder="Message"
          rows={6}
          name="message"
          {...register("message", {
            required: true,
          })}
        ></textarea>
        {errors.message && <p>All Fields Are Required</p>}
        <Button
          text={"submit"}
          type={"submit"}
          className={"border-2 p-2 bg-[#d6bd8b]  border-dark text-dark w-full"}
        />
      </form>
    </div>
  );
};

export default ContactForm;
