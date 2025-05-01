import React from "react";
import { FaCalendarAlt, FaUserMd, FaUserEdit } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-8">
      {/* Welcome Section */}
      <h1 className="text-3xl font-bold mb-4">Welcome back, John!</h1>
      <p className="mb-8 text-gray-600">Ready for your next check-up?</p>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <button className="flex items-center gap-3 bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600">
          <FaCalendarAlt /> Book Appointment
        </button>
        <button className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600">
          <FaCalendarAlt /> My Appointments
        </button>
        <button className="flex items-center gap-3 bg-purple-500 text-white px-6 py-4 rounded-lg hover:bg-purple-600">
          <FaUserMd /> Consult Specialist
        </button>
        <button className="flex items-center gap-3 bg-yellow-500 text-white px-6 py-4 rounded-lg hover:bg-yellow-600">
          <FaUserEdit /> Update Profile
        </button>
      </div>

      {/* Health Tip and Upcoming Appointment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Health Tip of the Day</h2>
          <p>Stay hydrated and take a 10-minute walk today!</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Upcoming Appointment</h2>
          <p>Dr. Smith - Tomorrow at 3 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
