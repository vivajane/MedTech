import React from 'react'
import { NavLink } from 'react-router-dom'
import logout from '../../config/logout'

const HeaderModal = ({setShowModal}) => {
  return (
    <div className='relative '>
      <div onClick={setShowModal} className='absolute  shadow-2xl rounded-lg bg-blue-500 h-30 w-30 px-6 py-4  top-[-20px] right-6 items-center justify-center'>
        <div className='flex text-center  flex-col space-y-2'>
            <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/submit-appointment">Appointments</NavLink>
            <button onClick={logout}>Logout</button>
        </div>

      </div>
    </div>
  )
}

export default HeaderModal
