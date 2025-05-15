import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      return setProfile(JSON.parse(stored));
    } else {
      return setProfile([]);
    }
  }, []);
  return (
    <div className="md:px-16 px-6 sm:px-8">
      <div>
        <div>
          <img src={profile.image} alt="" />
        </div>
        <h1 className="text-2xl font-bold">
          {profile.patientName}
        </h1>
        
      </div>

      <div className="">
        <h1 className="pt-4 text-slate-600">CONTACT INFORMATION</h1>
        <hr className="w-1/6 border-2 border-r-2 rounded-tr-full rounded-tl-full border-[#0360D9] my-3" />
        <div className="space-y-3 ">
          <p>
            <span className="pr-3">Email:</span>
            <span>{profile.email}</span>
          </p>
          <p>
            <span className="pr-3">Phone:</span>
            <span>{profile.tel}</span>
          </p>
        </div>
      </div>
      <div className="space-y-3  ">
        <h1 className="  text-slate-600 my-3">BASIC INFORMATION</h1>
        <hr className="w-1/6 border-2 border-r-2 rounded-tr-full rounded-tl-full border-[#0360D9] my-4" />
        <p>
          <span className="pr-3">Gender:</span>
          <span>{profile.gender}</span>
        </p>
        <p className="pb-3">
          <span className="pr-3">Date of Birth:</span>
          <span>{profile.dob}</span>
        </p>
      </div>
      <div className="py-3" ><NavLink className="bg-[#0360D9] px-9 py-2 my-3 rounded-md" to="/edit-profile">Edit</NavLink></div>
    </div>
  );
};

export default Profile;
