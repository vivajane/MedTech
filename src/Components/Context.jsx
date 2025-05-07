import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const ContextProvider = createContext(null);
const Context = (props) => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() =>{
    const seeDoctors = async() => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/doctors`);
        console.log (res.data);
        setDoctors(res.data)
      } catch (error) {
        console.log(error, "the error from axios");
        
      }
    }
    seeDoctors()
  },[])
  console.log(doctors, "doctors");
  const contextValue = {
    doctors,
  };
  return (
    <ContextProvider.Provider value={contextValue}>
      <>{props.children}</>
    </ContextProvider.Provider>
  );
};
export default Context;
