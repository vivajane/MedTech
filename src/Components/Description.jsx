import React from "react";
import { NavLink } from "react-router-dom";


const Description = (props) => {
  const { doctor } = props;

  return (
    <div className="md:px-16 sm:px-8 mt-16  px-6 mx-auto p-6 font-ibm">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-64 h-64 object-cover rounded-xl shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <p className="text-lg text-gray-500">{doctor.specialty}</p>
          <p className="text-sm text-gray-400">
           {doctor.name} {doctor.desc} experience
          </p>
          <p className="mt-4 text-gray-700">{doctor.bio}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Qualifications</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {doctor.qualifications.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Availability</h2>
        <p className="text-gray-600">{doctor.availability}</p>
      </div>

      <div className="mt-6">
        <NavLink to={`/appointment/${doctor.id}`} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Book Appointment
        </NavLink>

      </div>
    </div>
  );
};

export default Description;
