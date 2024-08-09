import React from "react";
import Input from "../utiles/Input.jsx";
import Button from "../utiles/Button.jsx";

const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-light py-5 ">
      <h1 className="text-4xl font-bold text-white mt-10 font-serif ">
        Signup Page{" "}
      </h1>
      <div className="w-1/2 p-10 bg-gray-200 rounded-xl my-5">
        <form className="flex flex-col gap-5" action="">
          <Input
            label={"Enter Your name:-"}
            type={"text"}
            placeholder={"Name"}
            className={"capitalize"}
          />
          <Input
            label={"Enter Your Email:-"}
            type={"email"}
            placeholder={"Email"}
          />
          <Input
            label={"Enter Your Password:-"}
            type={"Password"}
            placeholder={"Password"}
          />
          <Button
            type="submit"
            text={"Submit"}
            className={"w-full bg-light text-white"}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;