import React from "react";

import Input from "../Input";
import Button from "../Button";
import useContact from "../../hooks/useContact";

const ContactForm = () => {
  const { register, handleSubmit, errors, handelSubmitForm } = useContact();

  return (
    <div
      className={`w-full bg-section-background py-5 flex items-center justify-center`}
    >
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className=" w-4/5 flex flex-col gap-5"
      >
        <div className="w-full flex gap-2 items-center">
          <Input
            label="full name"
            type={"text"}
            placeholder={"Name"}
            className={"rounded-md border-black border-2 w-full"}
            {...register("userName", {
              required: true,
            })}
          />
          {errors.userName && <p>All Fields Are Required</p>}

          <Input
            label="PHONE NO"
            type={"number"}
            placeholder={"Phone"}
            className={"rounded-md border-black border-2 w-full"}
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
        </div>
        <Input
          label="email address"
          type={"email"}
          placeholder={"Email"}
          className={"rounded-md border-black border-2 w-full"}
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
        {errors.subject && <p>All Fields Are Required</p>}
        <div>
          <label className="text-white font-poppinsMedium " htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full rounded-md border-black border-2 px-5 py-2"
            placeholder="Message"
            rows={6}
            name="message"
            {...register("message", {
              required: true,
            })}
          ></textarea>
          {errors.message && <p>All Fields Are Required</p>}
        </div>
        <Button
          text={"submit"}
          type={"submit"}
          className={
            "border-2 py-2 rounded-xl  px-8 bg-[#EE6E36]  border-white text-white w-fit hover:bg-[#F59E78] transition-all"
          }
        />
      </form>
    </div>
  );
};

export default ContactForm;
