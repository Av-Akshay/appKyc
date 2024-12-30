import React from "react";

import Input from "../Input";
import useContact from "../../hooks/useContact";

const ContactForm = () => {
  const { register, handleSubmit, errors, handelSubmitForm, loading } =
    useContact();
  console.log(errors);

  return (
    <div
      className={`w-full bg-section-background py-5 flex items-center justify-center`}
    >
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className=" w-4/5 flex flex-col gap-5 max-sm:w-11/12"
      >
        <div className="w-full flex gap-2 items-center max-sm:flex-col">
          <div>
            <Input
              label="full name"
              type={"text"}
              placeholder={"Name"}
              className={"rounded-md border-black border-2 w-full"}
              {...register("name", {
                required: "Name is required.",
              })}
            />
            {errors.name && (
              <p className="error-message !text-red-500">
                {errors?.name?.message}
              </p>
            )}
          </div>
          <div>
            <Input
              label="PHONE NO"
              type={"number"}
              placeholder={"Phone"}
              className={"rounded-md border-black border-2 w-full"}
              {...register("phone", {
                required: "Phone number is required.",
              })}
            />
            {errors.phone && (
              <p className="error-message !text-red-500">
                {errors?.phone?.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <Input
            label="email address"
            type={"email"}
            placeholder={"Email"}
            className={"rounded-md border-black border-2 w-full"}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message !text-red-500">
              {errors?.email?.message}
            </p>
          )}
        </div>
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
              required: "Please enter some text in message field.",
            })}
          ></textarea>
          {errors.message && (
            <p className="error-message !text-red-500">
              {errors?.message?.message}
            </p>
          )}
        </div>
        <button
          disabled={loading}
          type={"submit"}
          className={
            "border-2 py-2 rounded-xl  px-8 bg-white  border-white text-black w-fit hover:bg-gray-400 transition-all max-sm:w-full text-center"
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
