import React from "react";
import img from "../assets/doc.png";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";

const figures = [
  {
    id: 1,
    title: "online support",
    fig: "247",
  },
  {
    id: 2,
    fig: "100+",
    title: "Doctors",
  },
  {
    id: 3,
    title: "Active patients",
    fig: "1M +",
  },
];

const Hero = () => {
  return (
    <section className="bg-[#E1EEFF] w-full pt-20 ">
      <div className="h-full ">
        <div className="flex md:flex-row flex-col justify-between w-full px-6 sm:px-8 lg:px-16">
          <div className="md:w-1/2 py-6">
            <h1 className="lg:text-[52px] text-[40px]  sm:leading-[50px] font-bold md:leading-[60px] text-[#021526]">
              Find & Search Your
              <span className="text-[#0360D9]"> Favourite</span> Doctor
            </h1>
            <hr className="w-1/2 border-2 border-r-2 rounded-tr-full rounded-tl-full border-[#0360D9] my-4" />
            <p className="py-2 text-xs md:text-base sm:text-sm">
              Book appointments with trusted doctors easily. Get the care you
              need, when you need it — from specialists across multiple fields.
            </p>
            <div className="py-4">
              <button className="bg-white hover:text-[white] hover:bg-[#021526] rounded-full sm:px-6 sm:py-3 py-2  px-3 text-xs sm:text-sm md:text-base text-black">
                <NavLink to="/appointmentpage">Book an Appointment</NavLink>
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-[400px] lg:w-[500px] lg:h-[400px]">
            <div className="md:absolute md:inset-0 bg-[#A5CCFF] rounded-full z-10"></div>
            <img
              src={img}
              alt="img"
              className="md:absolute ins z-20 w-full h-full object-cover md:object-contain"
            />
          </div>
        </div>

        <div className="bg-[#0360D9] px-12 sm:px-24 md:px-52 text-xs sm:text-sm md:text-base lg:px-72 py-4 md:py-8">
          <ul className="flex justify-between ">
            {figures.map((figure) => {
              const isNumeric = /^\d/.test(figure.fig); // Checks if fig starts with a number
              const numericValue = parseInt(
                figure.fig.replace(/[^\d]/g, ""),
                10
              );
              return (
                <li className=" px-4" key={figure.id}>
                  <h1 className="font-bold font-ibm sm:text-2xl md:text-4xl text-white">
                    {isNumeric ? (
                      <>
                        <CountUp end={numericValue} duration={2} />
                        {figure.fig.replace(/[0-9]/g, "")}
                      </>
                    ) : (
                      figure.fig
                    )}
                  </h1>

                  <h1 className="text-white text-xs">{figure.title}</h1>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
