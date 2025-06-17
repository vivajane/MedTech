import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { ContextProvider } from "../Components/Context";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Doctor from "../Components/Doctor";
import { FaTimes } from "react-icons/fa";
import Search from "./Search";

const AllDoctors = () => {
  const [showDoctors, setShowDoctors] = useState([]);
  const [up, setUp] = useState(false);
  const { doctors, search, showSearch } = useContext(ContextProvider);
  const [specialists, setSpecialists] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const checkFilter = (specialty) => {
    console.log("Clicked specialty:", specialty);
    if (filter.includes(specialty)) {
      setFilter([]);
      setShowDoctors(doctors);
    } else {
      const seenFilter = doctors.filter((item) => item.specialty === specialty);
      setShowDoctors(seenFilter);
    }
  };

  const showFilter = () => {
    
    let productCopy = doctors.slice();

    if (filter.length > 0) {
      productCopy = productCopy.filter((item) =>
        filter.includes(item.specialty)
      );
    }


     if (search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
   
    console.log("🔍 Search term:", search);
    if (productCopy.length === 0) {
      alert("No match found. Showing all doctors.");
      setShowDoctors(doctors);
    } else {
      setShowDoctors(productCopy);
    }

    
  };

  useEffect(() => {
    showFilter();
  }, [filter, search, showSearch]);

  const changeUp = () => {
    setUp((up) => !up);
  };

  useEffect(() => {
    if (doctors.length > 0) {
      setShowDoctors(doctors);

      const seeSpecialists = doctors
        .map((doc) => doc.specialty)
        .filter((name) => typeof name === "string" && name.trim() !== "");

      const showSpecialist = [...new Set(seeSpecialists)];
      setSpecialists(showSpecialist);
      setLoading(false);
    }
  }, [doctors]);

  return (
    <div className="md:px-16 px-6 sm:px-8 py-4 mt-20 list-none">
      <div>{showSearch && <Search />}</div>
      <div className="md:flex block gap-24">
        <div className="h-full md:block hidden space-y-3 py-3  w-1/5">
          <h1 className="lg:text-xl md:text-sm font-bold text-[#2E2E2E]">
            Find by Specialists
          </h1>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin text-center mx-auto rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <ul className="flex py-3 flex-col rounded-md space-y-1 border border-[#6b7b91]">
              {specialists.map((specialty) => (
                <li
                  onClick={() => checkFilter(specialty)}
                  className="px-4 text-xs md:text-sm py-2"
                  key={specialty}
                >
                  <h1 className="py-3 px-2 bg-[#0360D9] text-[#E1EEFF] rounded list-none">
                    {specialty}
                  </h1>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:hidden block ">
          <div className="flex justify-betweens items-center gap-3">
            <h1>FILTER </h1>
            <span onClick={changeUp}>
              {up ? <FaChevronUp size={20} /> : <FaAngleDown size={20} />}
            </span>
          </div>
          {up && (
            <ul className="grid grid-cols-2 my-3 py-3 rounded-md space-y-1 border border-[#6b7b91]">
              {specialists &&
                specialists.map((specialty) => {
                  return (
                    <li
                      onClick={() => checkFilter(specialty)}
                      className="px-4 text-xs md:text-sm py-2"
                      key={specialty}
                    >
                      <h1 className="py-3 px-2 bg-[#0360D9] text-[#E1EEFF] rounded list-none">
                        {specialty}
                      </h1>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-6">
          {showDoctors &&
            showDoctors.map((doctor) => {
              return (
                <div key={doctor.id}>
                  <Doctor {...doctor} />
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default AllDoctors;
