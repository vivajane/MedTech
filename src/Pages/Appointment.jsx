import React, { useContext, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ContextProvider } from "../Components/Context";

const Appointment = ({ setAdd }) => {
  const { doctors, isAuth, setIsAuth } = useContext(ContextProvider);
  const { appointmentId } = useParams();
  const doctor = doctors.find((e) => e.id === Number(appointmentId));

  console.log(appointmentId, "from useparam");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000),
    // userName: "",
    date: "",
    time: "",
    reason: "",
    tel: "",
    // email: "",
    dob: "",
    image: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Submitted:", formData);

    alert("Appointment booked successfully!");
    navigate("/submit-appointment");
    const newData = {
      id: formData.id,
      // userName: formData.userName,
      // email: formData.email,
      tel: formData.tel,
      date: formData.date,
      time: formData.time,
      reason: formData.reason,
      dob: formData.dob,
      image: formData.image,
      gender: formData.gender,
    };
    localStorage.setItem(
      "userProfile",
      JSON.stringify({
        // email: formData.email,
        // userName: formData.userName,
        tel: formData.tel,
        dob: formData.dob,
        image: formData.image,
        gender: formData.gender,
      })
    );

    setAdd((prev) => {
      const updated = [...prev, newData];
      localStorage.setItem("appointment", JSON.stringify(updated));
      return updated;
    });
    setFormData({
      id: Math.floor(Math.random() * 1000),
      // userName: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
      tel: "",
      // email: "",
      dob: "",
      image: "",
      gender: "",
    });
  };
  if (!doctor) {
    return (
      <div className="text-2xl font-bold text-red-500">
        <h1>Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Book an Appointment with {doctor?.name}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
            pattern="[0-9]{11}"
            minLength={11}
            maxLength={11}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        {/* <div>
          <label className="block mb-1 font-medium">Image</label>

          <input
            type="file"
            name="image"
            accept="image/*"
            value={formData.image}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                image: URL.createObjectURL(e.target.files[0]), // Convert file to temporary URL
              }))
            }
            className="w-full px-3 py-2 border rounded-md"
          />
        </div> */}
        <div>
          <label className="block mb-1 font-medium">DOB</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Sex</label>
          {/* <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          /> */}
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
            <label htmlFor="male">Male</label>
            <input onChange={handleChange} className="mt-1" type="radio" name="gender" value="male" checked = {formData.gender === "male"} id="" />
          </div>
          <div className="ml-5 flex items-center gap-1">
            <label htmlFor="female">Female</label>
            <input onChange={handleChange} className="mt-1" type="radio" name="gender" checked = {formData.gender === "female"} value="female" id="" />
          </div>
          </div>
        </div>

        <div className="text-black">
          <label className="block mb-1 font-medium">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black border-black rounded-md"
            rows="5"
            cols="10"
            placeholder="Brief reason for appointment"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
