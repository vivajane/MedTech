import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Joan Doe",
    text: "The doctors were professional, kind, and attentive. I felt truly cared for.",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Booking an appointment was so easy, and the service exceeded my expectations!",
    avatar: "https://images.pexels.com/photos/3290244/pexels-photo-3290244.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Michael Lee",
    text: "From start to finish, my experience was smooth and reassuring. Highly recommend!",
    avatar: "https://images.pexels.com/photos/17555801/pexels-photo-17555801/free-photo-of-portrait-of-smiling-man.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const Reviews = () => {
  return (
    <section className="py-10 bg-[#F9FAFB] px-6 md:px-16 sm:px-8">
      <div className="text-center mb-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#2E2E2E]">
          What Our Members Are Saying
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2">
          Real stories from patients who trusted us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div className="flex gap-1 mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 italic mb-6">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">Patient</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2">
          Join Us
        </button>
      </div>
    </section>
  );
};

export default Reviews;
