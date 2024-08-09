import React from "react";
import { Link, NavLink } from "react-router-dom";
import kycLogo from "../assets/Images/kycLogo.png";

const Navbar = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[10vh] w-full flex items-center">
      <div className="w-11/12 m-auto flex items-center justify-between ">
        <div>
          <Link to="/">
            <img
              className="h-12 w-12 rounded-full"
              src={kycLogo}
              alt=" Kyc Logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6 text-xl font-serif font-bold">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-light" : "text-black"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-light" : "text-black"
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-light" : "text-black"
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-light" : "text-black"
            }
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-light" : "text-black"
            }
            to={"/sign-up"}
          >
            Signup
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
