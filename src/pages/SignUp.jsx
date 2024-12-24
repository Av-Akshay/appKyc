import React from "react";

import Input from "../components/Input.jsx";
import useSignup from "../hooks/useSignup.js";

const SignUp = () => {
  const { errors, handleSubmit, message, register, submitForm } = useSignup();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-section-background gap-5">
      {message ? (
        <h1 className="text-4xl font-bold  text-red-500 mt-10 font-serif ">
          {message}
        </h1>
      ) : (
        <h1 className="text-4xl font-bold  text-white mt-10 font-serif ">
          Signin Page
        </h1>
      )}

      <div className="w-3/5 p-10 rounded-xl mb-10 border-2 border-white shadow-lg shadow-white max-sm:w-4/5">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5"
          action=""
        >
          <Input
            label={"Enter Id:"}
            type={"email"}
            placeholder={"Enter Id"}
            className="rounded-lg"
            {...register("ID", {
              required: "ID is required.",
            })}
          />
          {errors.ID && (
            <p className="error-message text-red-500">{errors?.ID?.message}</p>
          )}
          <Input
            label={"Enter Password:"}
            type={"Password"}
            placeholder={"Password"}
            className="rounded-lg"
            {...register("password", {
              required: "Password is required.",
            })}
          />
          {errors.password && (
            <p className="error-message text-red-500">
              {errors?.password?.message}
            </p>
          )}
          <button
            type="submit"
            className={`py-2 text-xl rounded-xl font-poppinsMedium shadow-md capitalize shadow-gray-500 bg-white text-section-background `}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
