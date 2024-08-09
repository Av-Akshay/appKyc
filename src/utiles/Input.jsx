import React from "react";

const Input = ({ label, className, placeholder, type, ...props }) => {
  return (
    <div>
      {label ? (
        <label className="font-medium text-xl font-serif">{label}</label>
      ) : (
        ""
      )}
      <input
        className={`w-full px-5 py-2 outline-none border-b-2 border-black bg-transparent rounded-lg font-serif ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
