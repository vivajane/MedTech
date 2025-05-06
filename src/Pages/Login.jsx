import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../config/login";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login(loginForm.email, loginForm.password);
      if (!res) {
        setMessage("Invalid Credentials");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error, "error from sign in");
    }
  };

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center font-ibm">
      <form
        onSubmit={onSubmitHandler}
        className=" md:w-96 shadow w-80 rounded-xl space-y-2 mx-auto p-8 "
      >{message && <p className={`text-center ${message === 'Invalid Credentials' ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
        <h1 className="text-2xl text-center font-bold">Login</h1>
        <p className="text-gray-500">Login to book appointment</p>
        <div>
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            onChange={onChangeHandler}
            className="w-full border px-6 py-2 rounded-md"
            type="email"
            name="email"
            id="email"
            value={loginForm.email}
          />
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
            id="password"
            value={loginForm.password}
          />
        </div>
        <div className="py-2">
          <button
            onClick={onSubmitHandler}
            className="bg-[#0360D9] text-white px-6 py-2 rounded-md"
          >
            Login
          </button>
        </div>
        <p className="text-gray-500">
          Don't have an account?{" "}
          <span className="pl-2 text-[#0360D9]">
            <a href="/signup">Sign Up</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
