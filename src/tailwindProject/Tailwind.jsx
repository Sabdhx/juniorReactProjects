import React from "react";
import Navbar from "./Navbar";
import AfterNavbar from "./afterNavbar";
import AfterMiddleProject from "./afterMiddleProject";
import CardsOfPrice from "./CardsOfPrice";
import Form from "./Form";
import Last from "./Last";

const Tailwind = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="block">
        <Navbar />
      </div>
      <AfterNavbar />
      <div className="mx-[15vw] md:mx-[1vw]  lg:mx-[1vw]">
      <AfterMiddleProject />
      </div>
     
      <div className="mt-[96vh] md:mt-[9vw] lg:mt-[1vw] md:flex">
      <div className="w-[100vw] h-[31vw] my-[4vh] ">
      <img src="./23.png" alt="" className="w-[100vw] h-[30vw] bg-black object-cover mt-[10vh]"/>
    </div>
        <CardsOfPrice />
        <CardsOfPrice />
        <CardsOfPrice />
      </div>

      <div className="">
      <Form />
      </div>
      <Last/>
    </div>

  );
};

export default Tailwind;
