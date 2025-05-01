import { createContext } from "react";
import doctors from "../assets/doctors";

export const ContextProvider = createContext(null);
const Context = (props) => {
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
