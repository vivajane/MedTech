import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/medmatch.png";
import { IoReorderThree } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const onSubmitHandlerUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const showMenu = () => {
    setShow((prev) => !prev);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <div className={`py-0 font-ibm relative ${show ? "h-screen" : ""}`}>
      <header className=" flex bg-[#E1EEFF] py-8 px-6 justify-between items-center sm:px-8 lg:px-16 ">
        <div className="font-ibm text-2xl font-bold">
          <NavLink to="/">
            <h1 className="text-[#0360D9]">
              <span className="text-[#021526]">Med</span>Match
            </h1>
          </NavLink>
        </div>

        <div className="md:flex gap-3  text-[#0D2B46] hidden  items-center lg:gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/contact"
          >
            Contact Us
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/physicians"
          >
            Physicians
          </NavLink>
        </div>
        <div className="md:flex hidden items-center gap-4">
          <button
            onClick={onSubmitHandler}
            className="border border-[#0360D9] rounded-full px-4 py-1 lg:px-8 lg:py-[5px] text-[#0360D9] hover:bg-blue-500 hover:text-white"
          >
            Login
          </button>
          <button
            onClick={onSubmitHandlerUp}
            className="bg-[#0360D9]  rounded-full lg:px-8 lg:py-[5px] px-4 py-1 text-white"
          >
            Sign Up
          </button>
        </div>

        {/* small screens */}
        <div onClick={showMenu} className="md:hidden">
          {show ? <FaTimes /> : <IoReorderThree className="text-3xl" />}
        </div>
      </header>
      <div onClick={closeMenu}
        className={`${
          show ? "block z-50" : "hidden"
        } h-screen w-full p-0 m-0 overflow-hidden transition ease-in-out absolute  top-28 duration-1000  bg-[#E1EEFF]  space-y-5 `}
      >
        <div className="flex space-y-6  py-8 flex-col items-center gap-3 text-[#0D2B46] lg:gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/contact"
          >
            Contact Us
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-[#0360D9]" : ""
            }
            to="/physicians"
          >
            Physicians
          </NavLink>
        </div>
        <div className="space-y-6 flex flex-col items-center gap-4">
          <button
            onClick={onSubmitHandler}
            className="border border-[#0360D9] rounded-full px-4 py-1 lg:px-8 lg:py-[5px] text-[#0360D9] hover:bg-blue-500 hover:text-white"
          >
            Login
          </button>
          <button
            onClick={onSubmitHandlerUp}
            className="bg-[#0360D9]  rounded-full lg:px-8 lg:py-[5px] px-4 py-1 text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
