import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../Components/Context";

const useDirectAuth = () => {
  const { isAuth } = useContext(ContextProvider);
  const location = useLocation();
  const navigate = useNavigate();
  const reDirectPath =
    new URLSearchParams(location.search).get("redirect") || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(reDirectPath, { replace: true });
    }
  }, [isAuth, reDirectPath, navigate]);
};

export default useDirectAuth;
