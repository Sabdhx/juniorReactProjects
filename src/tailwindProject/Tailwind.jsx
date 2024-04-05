import React from "react";
import Navbar from "./Navbar";
import AfterNavbar from "./afterNavbar";
import AfterMiddleProject from "./afterMiddleProject";
import CardsOfPrice from "./CardsOfPrice";
import Form from "./Form";
import Last from "./Last";
import RectangularPicture from "./rectangularPicture";


const Tailwind = () => {
  return (
    <div className="text-gray-300">
      <div className="block">
        <Navbar />
      </div>
      <AfterNavbar />
      <div className="mx-[15vw] md:mx-[1vw]  lg:mx-[1vw]">
      <AfterMiddleProject />
      </div>
     
      
   <RectangularPicture/>
   
      <div className="mt-[6vh]  lg:mt-[6vw] md:flex lg:mx-[5%] lg:ml-[2vw]   text-black gap-[2vw]">
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
