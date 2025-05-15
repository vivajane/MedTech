import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../assets/medmatch.png";
import { IoReorderThree } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ContextProvider } from "./Context";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import HeaderModal from "./HeaderModal";

const Header = () => {
  const { setShowSearch, isAuth, loading } = useContext(ContextProvider);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showModalNow = () => {
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const showSearchHandler = () => {
    setShowSearch(true);
    navigate("/alldoctors")
  };
  const onSubmitHandlerUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  if (loading) return null;

  const showMenu = () => {
    setShow((prev) => !prev);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <div className={` font-ibm  relative ${show && "h-screen"}`}>
      <header className=" flex bg-white py-6 px-6 justify-between items-center sm:px-8 lg:px-16 ">
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
            to="/alldoctors"
          >
            Physicians
          </NavLink>
        </div>
        <div className="md:flex hidden items-center gap-4">
          <div onClick={showSearchHandler}>
            <CiSearch className="text-2xl text-blue-600" />
          </div>
          {isAuth ? (
            <div>
              <MdOutlinePersonAddAlt
                onClick={showModalNow}
                className="text-2xl text-blue-600"
              />
            </div>
          ) : (
            <div className="flex items-center gap-4">
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
          )}
        </div>

        {/* small screens */}
        <div className="md:hidden">
          <div className="flex items-center gap-4">
            <div onClick={showSearchHandler}>
              <CiSearch className="text-2xl text-blue-600" />
            </div>
            <div onClick={showMenu}>
              {show ?  (
              <FaTimes className="text-3xl" />
            ) : (
              <IoReorderThree className="text-3xl" />
            )}
            </div>
            {isAuth && (
              <div>
                <MdOutlinePersonAddAlt
                  onClick={showModalNow}
                  className="text-2xl text-blue-600"
                />
              </div>
            )}
          </div>
        </div>
      </header>
      <div
        onClick={closeMenu}
        className={`${
          show ? "inset-0 z-50 " : "hidden"
        } w-full  overflow-hidden transition ease-in-out absolute top-16 duration-1000  py-14 bg-[#E1EEFF] border-b border-[#0360D9]  space-y-5 `}
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
            to="/alldoctors"
          >
            Physicians
          </NavLink>
        </div>
        {!isAuth && (
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
        )}
      </div>
      {showModal && <HeaderModal setShowModal={hideModal} />}
    </div>
  );
};

export default Header;
