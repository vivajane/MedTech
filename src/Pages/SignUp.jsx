import React, { useContext, useEffect } from "react";
import { useState } from "react";
import signUp from "../../config/signup";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDirectAuth from "../assets/useDirectAuth";
import { ContextProvider } from "../Components/Context";

const SignUp = () => {
  const navigate = useNavigate();
  const { isAuth, loading } = useContext(ContextProvider);
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  useDirectAuth(isAuth);
  if (loading) {
    return <div>Loading...</div>;
  }

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setMessage("");
    console.log(formData, "from data");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formData.userName) {
      setMessage("Username is required");
      return;
    }
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    if (!validateEmail(formData.email)) {
      setMessage("Invalid email format.");
      return; // Stop further execution if the email is invalid
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");

      return;
    }
    try {
      const response = await signUp(
        formData.email,
        formData.password,
        formData.userName
      );
      console.log("Signup response:", response);
      if (!response) {
        setMessage("Signup failed. Please try again.");
      }

      localStorage.setItem(
        "auth",
        JSON.stringify({
          email: formData.email,
          userName: formData.userName,
        })
      );
      console.log("Saved to localStorage:", {
        email: formData.email,
        userName: formData.userName,
      });

      if (response) {
        setMessage("Account created successfully");
        setFormData({
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        });
        setTimeout(() => {
          setMessage("");
          navigate(`/login?redirect=${encodeURIComponent(redirect)}`);
        }, 1000);
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage(error.message || "An error has occured");
      console.error("Error signing up:", error.message);
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
    }
  };

  return (
    <div className="py-4 h-screen flex flex-col justify-center items-center w-full font-ibm">
      <form
        onSubmit={onSubmitHandler}
        className="w-80 md:w-96 shadow rounded-xl space-y-2 mx-auto p-8 "
      >
        {message && (
          <p
            className={`${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <h1 className="text-2xl font-bold text-center ">Create an account</h1>

        <p className="text-gray-500 text-sm md:text-base ">
          Please sign up to book appointment
        </p>
        <div>
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            onChange={onChangeHandler}
            className="w-full border px-6 py-3 rounded-md"
            type="email"
            name="email"
            id="email"
            value={formData.email}
          />
        </div>
        <div>
          <label className="text-gray-500" htmlFor="userName">
            UserName
          </label>
          <input
            onChange={onChangeHandler}
            className="w-full border px-6 py-2 rounded-md"
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
          />
          {/* {
            message && (
              <p className="text-red-500 text-sm text-center">{message}</p>
            )
          } */}
        </div>
        <div>
          <label className="text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            onChange={onChangeHandler}
            className="w-full border px-6 py-2 rounded-md"
            type="password"
            name="password"
            value={formData.password}
            id="password"
          />
        </div>
        <div>
          <label className="text-gray-500" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            onChange={onChangeHandler}
            className="w-full border px-6 py-2 rounded-md"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            id="confirmPassword"
          />
        </div>
        <div className="py-2">
          <button className="bg-[#0360D9] text-white px-6 py-2 rounded-md">
            Create account
          </button>
        </div>
        <p className="text-gray-500">
          Already have an account?{" "}
          <span className="text-[#0360D9]">
            <NavLink to={`/login?redirect=${redirect}`}>Login</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
