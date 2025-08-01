import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../config/login";
import useDirectAuth from "../assets/useDirectAuth";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ContextProvider } from "../Components/Context";
import Loading from "../Components/Loading";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { loading, setLoading } = useContext(ContextProvider);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { isAuth } = useContext(ContextProvider);
  const redirect = new URLSearchParams(location.search).get("redirect");
  useDirectAuth(isAuth);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setMessage("");
  };

  const onSubmitHandler = async (e) => {
    
    e.preventDefault();
    
    if(!loginForm.email || !loginForm.password) return setMessage("Please fill all the fields");
    setLoading(true);
    try {
      const res = await login(loginForm.email, loginForm.password);
      if (!res) {
        setMessage("Invalid Credentials");
        return;
      } else {
        navigate(redirect);
      }
    } catch (error) {
      console.log(error, "error from sign in");
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loading/>;
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center font-ibm">
      <form
        onSubmit={onSubmitHandler}
        className=" md:w-96 shadow w-80 rounded-xl space-y-2 mx-auto p-8 "
      >
        {message && (
          <p
            className={`text-center ${
              message === "Invalid Credentials" || message === "Please fill all the fields"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
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
          <button className="bg-[#0360D9] text-white px-6 py-2 rounded-md">
            Login
          </button>
        </div>
        <p className="text-gray-500">
          Don't have an account?{" "}
          <span className="pl-2 text-[#0360D9]">
            <NavLink to={`/signup?redirect=${redirect}`}>Sign Up</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
