import React from "react";

const Input = React.forwardRef(function Input(
  { label, className, placeholder, type, ...props },
  ref
) {
  return (
    <div>
      {label ? (
        <label className="font-medium text-xl font-serif">{label}</label>
      ) : (
        ""
      )}
      <input
        className={`w-full px-5 py-2 outline-none font-serif ${className}`}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
