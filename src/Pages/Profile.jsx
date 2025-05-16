import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [editProfile, setEditProfile] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      return setProfile(JSON.parse(stored));
    } else {
      return setProfile([]);
    }
  }, []);
  const onChangeHandler = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault;
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setEditProfile(false);
    alert("Profile updated!");
  };
  if (!profile) {
    return <h1>No profile</h1>;
  }
  return (
    <div className="md:px-16 px-6 sm:px-8">
      <div>
        <div>
          <img src={profile.image} alt="" />
        </div>
        <div className="space-y-3 flex gap-4">
          <label className=" font-bold pt-[12px]">Patient Name:</label>
        {editProfile ? (
          <input
            type="text"
            name="patientName"
            value={profile.patientName}
            onChange={onChangeHandler}
            className="w-1/6 px-3 py-1 border rounded"
          />
        ) : (
          <p >{profile.patientName}</p>
        )}
        </div>
      </div>

      <div className="">
        <h1 className="pt-4 text-slate-600">CONTACT INFORMATION</h1>
        <hr className="w-1/6 border-2 border-r-2 rounded-tr-full rounded-tl-full border-[#0360D9] my-3" />
        <div className="space-y-3 flex gap-4 ">
          <label className=" font-bold pt-[12px]">Email:</label>
          {editProfile ? (
            <input
              type="email"
              name="patientName"
              value={profile.email}
              onChange={onChangeHandler}
              className="w-1/6 px-3 py-1 border rounded"
            />
          ) : (
            <p>{profile.email}</p>
          )}
        </div>
        <div className="space-y-3 flex gap-4 ">
          <label className=" font-bold pt-[12px]">Phone No:</label>
          {editProfile ? (
            <input
              type="tel"
              name="tel"
              value={profile.tel}
              onChange={onChangeHandler}
              className="w-1/6 px-3 py-1 border rounded"
            />
          ) : (
            <p>{profile.tel}</p>
          )}
        </div>
      </div>
      <div className="space-y-3  ">
        <h1 className="  text-slate-600 my-3">BASIC INFORMATION</h1>
        <hr className="w-1/6 border-2 border-r-2 rounded-tr-full rounded-tl-full border-[#0360D9] mt-4" />
        <div className="space-y-3 flex gap-4 ">
          <label className=" font-bold pt-[12px]">Gender:</label>
          {editProfile ? (
            <input
              type="text"
              name="gender"
              value={profile.gender}
              onChange={onChangeHandler}
              className="w-1/6 px-3 py-1 border rounded"
            />
          ) : (
            <p>{profile.gender}</p>
          )}
        </div>
        <div className="flex gap-4">
          <label className=" font-bold">Date of Birth:</label>
          {editProfile ? (
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={onChangeHandler}
              className="w-1/6  px-3 py-1 border rounded"
            />
          ) : (
            <p className="">{profile.dob}</p>
          )}
        </div>
      </div>
      <div className="py-3">
        <button type="submit"
          className="bg-[#0360D9] px-9 py-2 my-3 rounded-md"
          onClick={() => setEditProfile(!editProfile)}
        >
          {editProfile ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
