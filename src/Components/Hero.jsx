import React from "react";
import img from "../assets/doc.png";

const figures = [
  {
    id: 1,
    title: "online support",
    fig: "24/7",
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
    <section className="bg-[#E1EEFF] w-full pt-8 ">
      <div className="h-full ">
        <div className="flex justify-between px-6 sm:px-8 lg:px-16">
          <div className="w-1/2 py-6">
            <h1 className="md:text-[52px] font-bold md:leading-[60px] text-[#021526]">
              Find & Search Your
              <span className="text-[#0360D9]"> Favourite</span> Doctor
            </h1>
            <hr className="w-1/2 border-2 border-r-2 rounded-tr-full rounded-tl-full border-[#0360D9] my-4" />
            <p className="py-2 text-xs md:text-base sm:text-sm">
              Book appointments with trusted doctors easily. Get the care you
              need, when you need it — from specialists across multiple fields.
            </p>
          </div>
          <div className="relative md:w-72 w-36 h-36 sm:h-52 sm:w-52 md:h-72">
            <div className="bg-[#A5CCFF] rounded-t-full  absolute top- z-10  w-full h-full"></div>
            <div className="">
              <img
                className="z-20 object-cover top-12 right-0 absolute w-full h-full"
                src={img}
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="px-6 sm:px-8 lg:px-16 pb-4">
          <button className="bg-white hover:text-[white] hover:bg-[#021526] rounded-full sm:px-6 sm:py-3  px-3 py-1 text-xs sm:text-sm md:text-base text-black">
            Book an appointment
          </button>
        </div>
        <div className="bg-[#0360D9] px-12 sm:px-24 md:px-52 text-xs sm:text-sm md:text-base lg:px-72 py-4 md:py-8">
          <ul className="flex justify-between ">
            {figures.map((figure) => {
              return (
                <li className=" px-4" key={figure.id}>
                  <h1 className="font-bold font-ibm sm:text-2xl md:text-4xl text-white">
                    {figure.fig}
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
