import React from "react";
import { useNavigate } from "react-router-dom";
import logout from "../../config/logout";

const LogoutModal = ({ setShow}) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        
        logout();
        navigate("/");
    }
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h1>Are you sure you want to Logout</h1>
        <div>
            <button onClick={onClickHandler}  className="bg-red-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Logout</button>
            <button onClick={() => setShow(false)}  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
      
    </div>
  );
};

export default LogoutModal;
