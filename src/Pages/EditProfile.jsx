import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate()
    const [profile,setProfile] = useState({
        patientName:"",
        email:"",
        tel:"",
        dob:"",
        image:"",
        gender:""
    })
    const onChangeHandler = (e) =>{
        setProfile({...profile, [e.target.name]:e.target.value})
    }
    useEffect(() => {
        const stored = localStorage.getItem("userProfile")
        if(stored){
            setProfile(JSON.parse(stored))

        } else {
            setProfile([])
        }
        
    },[])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("userProfile", JSON.stringify(profile));
        alert("Profile updated successfully!");
        navigate("/profile")
    }
  return (
    <div>
      <div>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="block mb-1 font-medium">Patient Name</label>
            <input
              type="text"
              name="patientName"
              className="w-full px-3 py-2 border rounded-md"
              value={profile.patientName}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone no</label>
            <input
              type="tel"
              name="tel"
              className="w-full px-3 py-2 border rounded-md"
               value={profile.tel}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
               value={profile.email}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <input
              type="text"
              name="gender"
              className="w-full px-3 py-2 border rounded-md"
               value={profile.gender}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Image</label>
            <input
              type="file"
              name="image"
              className="w-full px-3 py-2 border rounded-md"
               value={profile.image}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default EditProfile;
