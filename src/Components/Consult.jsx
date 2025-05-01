import React from "react";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaLungs } from "react-icons/fa";
import { FaNutritionix } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";

const Consult = () => {
  const specialists = [
    {
      id: 1,
      title: "Cardiologist",
      icon: <BsFillHeartPulseFill size={30}/>,
      text: "Leading specialists in heart health, offering diagnosis, treatment, and care for all cardiac conditions.",
    },
    {
      id: 2,
      title: "Pulmonologist",
      icon: <FaLungs size={30}/>,
      text: "Dedicated lung and respiratory care experts, helping you breathe better and live healthier.",
    },
    {
      id: 3,
      title: "Psychiatrist",
      icon: <RiMentalHealthFill size={30} />,
      text: "Compassionate psychiatrists and therapists supporting emotional well-being and mental resilience.",
    },
    {
      id: 4,
      title: "Nutritionist",
      icon: <FaNutritionix size={30} />,
      text: "Personalized health programs designed to improve diet, boost immunity, and enhance your lifestyle.",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 md:px-16 px-6 sm:px-8 py-4 gap-4">
        {specialists.map((specialist) => (
          <div
            className="border border-[#0360D9] p-4 rounded-xl"
            key={specialist.id}
          >
            <Specialist
              title={specialist.title}
              icon={specialist.icon}
              text={specialist.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consult;

const Specialist = (specialist) => {
  return (
    <ul>
      <li >{specialist.icon}</li>
      <li className="py-2 font-ibm font-semibold">{specialist.title}</li>

      <li>{specialist.text}</li>
    </ul>
  );
};
