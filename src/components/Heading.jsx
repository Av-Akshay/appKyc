import React from "react";

const Heading = React.memo(({ text, className }) => {
  return (
    <>
      <h1 className={`font-poppinsBold text-3xl text-black ${className}`}>
        {text}
      </h1>
    </>
  );
});

export default Heading;
