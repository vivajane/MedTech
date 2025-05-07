import React from 'react'


const SubmitAppointment = ({add}) => {
    
  return (
    <div>
      <h1>ghjuiii</h1>
      <div>
        {add.map((item) => {
          return (
            <div>
              <h1>{item.patientName}</h1>
              <h1>{item.doctor}</h1>
              <h1>{item.date}</h1>
              <h1>{item.time}</h1>
              <h1>{item.reason}</h1>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SubmitAppointment
