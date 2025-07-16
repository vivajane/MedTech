import React from "react";
import { NavLink } from "react-router-dom";

const Doctor = (props) => {
  return (
    
      <li key={props.id} className="w-full flex  flex-col">
       <NavLink to={`/doctordesc/${props.id}`}>
       <div className="w-full hover:py-8 py-4">
          <img
            className="md:w-64 sm:w-52 sm:h-72  hover:scale-105 duration-300 md:h-80 w-full object-cover rounded-md"
            src={props.img}
            alt={props.name}
          />
        </div>
       </NavLink>
        <h1 className="md:text-lg font-bold">{props.name}</h1>
        <h3 className="text-md font-bold text-gray-500">{props.specialty}</h3>
        
      </li>
    
  );
};

export default Doctor;
