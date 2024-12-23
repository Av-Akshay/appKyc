import React from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

const SignUp = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-light py-5 ">
      <h1 className="text-4xl font-bold text-white mt-10 font-serif ">
        Signup Page{" "}
      </h1>
      <div className="w-1/2 p-10 bg-gray-200 rounded-xl my-5">
        <form className="flex flex-col gap-5" action="">
          <Input
            label={"Enter Your name:-"}
            type={"text"}
            placeholder={"Name"}
            className={
              "capitalize border-b-2 border-black rounded-lg bg-transparent"
            }
          />
          <Input
            label={"Enter Your Email:-"}
            type={"email"}
            placeholder={"Email"}
            className={"border-b-2 border-black rounded-lg bg-transparent"}
          />
          <Input
            label={"Enter Your Password:-"}
            type={"Password"}
            placeholder={"Password"}
            className={"border-b-2 border-black rounded-lg bg-transparent"}
          />
          <Button
            type="submit"
            text={"Submit"}
            className={"w-full bg-light !text-white"}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
