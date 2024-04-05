import React from "react";

const CardsOfPrice = () => {
  return (
    <div className=" w-screen h-[64vh] ml-3">
      <div
        className="h-[60vh] w-[90vw] md:w-[30vw] 
      md:w-[30vw] bg-gray-200    shadow bg-black  p-4 
      transition duration-700 transform hover:scale-101 hover:shadow-lg
      "
      >
        <h1 className="text-center pt-4 text-2xl font-bold">Elite</h1>
        <h1 className="text-center pt-4">$999</h1>
        <h1 className="text-center pt-7">Car transfer with air-con</h1>
        <h1 className="text-center pt-7">Creative staged picture</h1>
        <h1 className="text-center text-[14px] pt-7">
          Photoshop in different location
        </h1>
        <h1 className="text-center text-[14px] pt-7">
          100 ready-to-print Photoshop
        </h1>
        <h1 className="text-center pt-7">9 hours of shooting</h1>
        <div className="flex justify-center mt-[10%] ">
          <button className="my-3  text-white px-6 py-1 rounded text-[1rem] shadow-3xl  lg:ml-[3vh] lg:py-1 bg-[#464543] hover:bg-gray-800 opacity-90 transition duration-200  ">
            book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsOfPrice;
