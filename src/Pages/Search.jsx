import React, { useContext } from "react";
import { ContextProvider } from "../Components/Context";
import { FaTimes } from "react-icons/fa";

const Search = () => {
  const onChnageHandler = (e) => {
    setSearch(e.target.value);
    console.log("Search input updated to:", e.target.value);

  };
  const { setSearch, setShowSearch, search } = useContext(ContextProvider);
  return (
    <div className="flex relative items-center gap-2">
      <div className="flex-1">
        <input
          onChange={onChnageHandler}
          className="min-w-full border border-black rounded-full py-2 px-4"
          type="text"
          name=""
          id=""
          value={search}
        />
      </div>
      <div className="absolute right-4" onClick={() => setShowSearch(false)}>
        <FaTimes size={20} />
      </div>
    </div>
  );
};

export default Search;
