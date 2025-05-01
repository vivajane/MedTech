import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./Context";

const TopRated = () => {
  const [showDoctors, setShowDoctors] = useState([]);
  const { doctors } = useContext(ContextProvider);

  useEffect(() => {
    if (doctors.length > 0) {
      let doctorsCopy = doctors.slice();
      doctorsCopy = doctorsCopy.filter((item) => item.isRated === true);
      setShowDoctors(doctorsCopy);
    }
  }, [doctors]);

  return (
    <div className="md:px-16 px-6 sm:px-8 py-4">
      {" "}
      {/* Added padding to container */}
      <h1 className="text-3xl font-bold text-[#2E2E2E]">Top Specialists</h1>
      <p className="text-gray-500 text-lg font-manrope">Meet the highest-rated doctors, trusted by thousands of patients</p>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-6  ">
        {" "}
        {/* Remove gap, margin, and padding */}
        {showDoctors &&
          showDoctors.map((doctor) => {
            return (
              <li
                key={doctor.id}
                className="flex flex-col w-full items-center"
              >
                <div className="w-full py-4">
                  <img 
                    className="sm:w-64 hover:scale-110 duration-300 sm:h-64 w-full object-cover rounded-md"
                    src={doctor.img}
                    alt={doctor.name}
                  />
                </div>
                <h1 className="md:text-lg font-bold">{doctor.name}</h1>
                <h3 className="text-md font-bold text-gray-500">{doctor.specialty}</h3>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TopRated;
