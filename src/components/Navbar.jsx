import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../utils/icons";

const Navbar = () => {
  return (
    <div className="navbar justify-between min-h-[10vh] ">
      <div className="navbar-start !flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="bg-transparent">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `font-poppinsSemibold !text-them !bg-transparent`
                    : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `font-poppinsSemibold !text-them !bg-transparent`
                    : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
                }
                to={"/services"}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `font-poppinsSemibold !text-them !bg-transparent`
                    : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `font-poppinsSemibold !text-them !bg-transparent`
                    : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl z-10">
          <img className="w-full h-12" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex mr-5">
        <ul className="menu-horizontal px-1 gap-8">
          <li className="!bg-transparent">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? `font-poppinsSemibold !text-them !bg-transparent`
                  : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="!bg-transparent">
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                isActive
                  ? `font-poppinsSemibold !text-them !bg-transparent`
                  : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="!bg-transparent">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? `font-poppinsSemibold !text-them !bg-transparent`
                  : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="!bg-transparent">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? `font-poppinsSemibold !text-them !bg-transparent`
                  : `font-poppinsSemibold !text-slate-800 !bg-transparent hover:!text-them`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
