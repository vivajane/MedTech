import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const lists = [
  {
    id: 1,
    title: "Expert Doctors",
    text: "Our doctors are highly experienced, certified, and dedicated to providing the best care tailored to your needs.",
  },
  {
    id: 2,
    title: "Convenient Appointment Scheduling",
    text: "We offer flexible appointment scheduling options, allowing you to choose the time that works best for you and your schedule.",
  },
  {
    id: 3,
    title: "Quality Care",
    text: "We prioritize quality care, ensuring that you receive the highest standard of healthcare services.",
  },
  {
    id: 4,
    title: "Affordable Prices",
    text: "We offer competitive pricing, making healthcare accessible to all individuals.",
  },
  {
    id: 5,
    title: "Patient-Focused Approach",
    text: "We prioritize the well-being of our patients, providing personalized care and support.",
  },
  {
    id: 6,
    title: "Customer Support",
    text: "We offer 24/7 customer support, ensuring you have access to information and resources when needed.",
  },

];
const Why = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = showMore ? lists : lists.slice(0, 3);
    
  return (
    <div className="md:px-16 px-6 sm:px-8">
      <div>
        <h1 className="text-3xl text-center py-6 font-bold">Why Choose Us</h1>
        <div className="md:flex gap-8">
          {" "}
          <div className="w-full">
            <img
              className="rounded-xl "
              src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="doc"
            />
          </div>
          <div className="w-full">
            <ul>
              {toggleShowMore.map((list) => {
                return (
                  <li className="py-2" key={list.id}>
                    <h1 className="text-lg font-bold font-ibm">{list.title}</h1>
                    <p>{list.text}</p>
                  </li>
                );
              })}
              <div className="flex gap-3 w-40 bg-[#0360D9] text-white mt-1 py-[10px] px-6 rounded-xl items-center">
                <button onClick={() => setShowMore(!showMore)} className="">
                  {showMore ? "Show Less" : "Learn More"}
                </button>
                <span>
                  {showMore ? <FaArrowUp/> : <FaArrowRight />}
                </span> 
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
