import React from "react";
import { Link } from "react-router-dom";

const Button = React.memo(({ text, className, type }) => {
  return (
    <Link
      type={type}
      className={`py-2 text-xl rounded-xl font-poppinsMedium shadow-md capitalize shadow-gray-500 bg-white text-[#207DFF] ${className}`}
    >
      {text}
    </Link>
  );
});

export default Button;
