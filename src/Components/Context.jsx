import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const ContextProvider = createContext(null);
const Context = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user); // true if user is logged in
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const seeDoctors = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/doctors`);
        console.log(res.data);
        setDoctors(res.data);
        console.log("Doctors data from API:", res.data);
      } catch (error) {
        console.log(error, "the error from axios");
      }
    };
    seeDoctors();
  }, []);
  console.log(doctors, "doctors");

  const contextValue = {
    doctors,
    search,
    setSearch,
    isAuth,
    setIsAuth,
    showSearch,
    setShowSearch,
    loading,
    setLoading,
  };
  return (
    <ContextProvider.Provider value={contextValue}>
      <>{props.children}</>
    </ContextProvider.Provider>
  );
};
export default Context;
