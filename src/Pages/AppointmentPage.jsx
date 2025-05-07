import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentPage = () => {
  const navigate = useNavigate();

  const goToBookingForm = () => navigate("/appointment");
  const viewAppointments = () => navigate("/my-appointments");

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Manage Your Health</h1>

        {/* Book Appointment Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">📅 Book an Appointment</h2>
          <p className="text-gray-600 mb-4">
            Ready to consult a doctor? Book your appointment in just a few clicks.
          </p>
          <button
            onClick={goToBookingForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Book Now
          </button>
        </div>

        {/* Health Tips Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2"> Health Tips</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li> Drink plenty of water — at least 8 glasses a day.</li>
            <li>Sleep 7–9 hours each night for proper rest.</li>
            <li> Stay active — even 30 mins of walking helps.</li>
            <li> Eat a variety of fruits and vegetables daily.</li>
          </ul>
        </div>

        {/* View Appointments Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">📋 My Appointments</h2>
          <p className="text-gray-600 mb-4">
            Check all your scheduled, completed, and cancelled appointments.
          </p>
          <button
            onClick={viewAppointments}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            View Appointments
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
