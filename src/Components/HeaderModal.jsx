import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LogoutModal from './LogoutModal'

const HeaderModal = ({setShowModal}) => { 
 const navigate = useNavigate();
  
  return (
    <div className='relative '>
      <div onClick={setShowModal} className='absolute  shadow-2xl rounded-lg bg-blue-500 h-30 w-30 px-2 py-2  top-[-20px] right-0 items-center justify-center'>
        <div className='flex text-center  flex-col space-y-2'>
            <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/submit-appointment">Appointments</NavLink>
            <button onClick={() => navigate("/logout-modal")}>Logout</button>
        </div>

      </div>

    </div>
  )
}

export default HeaderModal
