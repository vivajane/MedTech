// ProtectedRoute.jsx
import { useContext, useEffect } from "react";
import { ContextProvider } from "./Context";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = useContext(ContextProvider);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuth) {
      navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`);
    }
  }, [isAuth, loading, location, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuth ? children : null;
};

export default ProtectedRoute;
