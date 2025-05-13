import React from "react";

const SubmitAppointment = ({ add }) => {
  return (
    <div>
      
      <div>
        {add.map((item) => {
          return (
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
                Appointment Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">
                    Full Name:
                  </span>
                  <span>{item.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <span>{item.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Phone:</span>
                  <span>{item.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Date:</span>
                  <span>{item.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Time:</span>
                  <span>{item.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Doctor:</span>
                  <span>{item.doctor}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">
                    Reason for Visit:
                  </p>
                  <p className="text-gray-800 mt-1">{item.reason}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubmitAppointment;
