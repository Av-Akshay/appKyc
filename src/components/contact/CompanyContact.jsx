import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread, MdAddIcCall } from "react-icons/md";

const CompanyContact = () => {
  return (
    <div className="w-1/2 flex items-center justify-center font-serif font-medium animate-rightSlider">
      <div className="flex flex-col gap-10 justify-center">
        <div className=" flex items-center gap-8">
          <div className=" text-xl">
            <IoLocation className="border p-2 w-8 h-8 rounded-md bg-[#d6bd8b] border-dark text-dark" />
            Location:
          </div>
          <h1 className="text-2xl"> Dehradun, IT park</h1>
        </div>
        <div className=" flex items-center gap-8">
          <div className=" text-xl">
            <MdMarkEmailUnread className="border p-2 w-8 h-8 rounded-md bg-[#d6bd8b] border-dark text-dark" />
            Email:
          </div>
          <h1 className="text-2xl"> poojakycworld@gmail.com</h1>
        </div>
        <div className=" flex items-center gap-8">
          <div className=" text-xl">
            <MdAddIcCall className="border p-2 w-8 h-8 rounded-md bg-[#d6bd8b] border-dark text-dark" />
            Contact:
          </div>
          <h1 className="text-2xl"> +91 1234567890</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyContact;
