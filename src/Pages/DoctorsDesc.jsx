import React, { useContext } from "react";
import Description from "../Components/Description";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../Components/Context";

const DoctorsDesc = () => {
  const { doctors } = useContext(ContextProvider);
  const { doctordescId } = useParams();
  console.log(doctordescId, "from useparam");
  const doctor = doctors.find((e) => e.id === Number(doctordescId));
  console.log(useParams(), "hey")
  return <div>
    {
    doctor ? <Description doctor={doctor} /> : <h1>Not Found</h1>
    }
    </div>;
};

export default DoctorsDesc;
