import React from "react";

const Button = ({ text, className, type }) => {
  return (
    <div>
      <button
        type={type}
        className={`${className} py-2 font-bold font-serif text-xl rounded-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
