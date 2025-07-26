import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./Context";
import Doctor from "./Doctor";
import Loading from "./Loading";

const TopRated = () => {
  const [loading, setLoading] = useState(true);
  const [showDoctors, setShowDoctors] = useState([]);
  const { doctors } = useContext(ContextProvider);

  useEffect(() => {
    if (doctors.length > 0) {
      let doctorsCopy = doctors.slice();
      doctorsCopy = doctorsCopy.filter((item) => item.isRated === true);
      setShowDoctors(doctorsCopy);
      setLoading(false);
    }
  }, [doctors]);

  return (
    <div className="md:px-16 px-6 sm:px-8 py-4">
      {" "}
      {/* Added padding to container */}
      <h1 className="text-3xl font-bold text-[#2E2E2E]">Top Specialists</h1>
      <p className="text-gray-500 pt-3 text-lg font-manrope">
        Meet the highest-rated doctors, trusted by thousands of patients
      </p>
     {
      loading ? (
        <Loading/>
      ) :  <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-6  ">
     
      {showDoctors &&
        showDoctors.map((doctor) => {
          return <div key={doctor.id}>
          <Doctor  {...doctor}/>
          </div>;
        })}
    </ul>
     }
    </div>
  );
};

export default TopRated;
