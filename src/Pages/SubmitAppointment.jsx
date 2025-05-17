import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SubmitAppointment = ({ add, setAdd }) => {
  const navigate = useNavigate();
  // const [closeModal, setCloseModal] = useState(false);
  const deleteAll = () => {
    setAdd([]);
  };

  const del = (id) => {
    const delItem = add.filter((item) => item.id !== id);
    setAdd(delItem);
    alert("Appointment cancelled successfully!");
    if (delItem.length === 0) {
      navigate("/");
    }
  };
  useEffect(() => {
    if (!add.length) {
      navigate("/");
    }
  }, [add, navigate]);

  return (
    <div className="min-h-screen relative bg-gray-100 py-10">
      <div>
        {add.map((item) => {
          return (
            <div
              key={item.id}
              className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-center  text-blue-600">
                Appointment Summary
              </h2>

              <div className="space-y-4 py-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Phone:</span>
                  <span>{item.tel}</span>
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
                  <span className="font-semibold text-gray-700">DOB:</span>
                  <span>{item.dob}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Gender:</span>
                  <span>{item.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Image:</span>
                  <img src={item.img} alt="img" />
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    Reason for Visit:
                  </p>
                  <p className="text-gray-800 mt-1">{item.reason}</p>
                </div>
              </div>
              <div className="flex gap-6 justify-end mt-6">
                <button
                  onClick={() => navigate("/")}
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  OK
                </button>
                <button
                  onClick={() => del(item.id)}
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {add.length >= 2 && (
        <button
          className="absolute top-40 right-8 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          onClick={deleteAll}
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default SubmitAppointment;
