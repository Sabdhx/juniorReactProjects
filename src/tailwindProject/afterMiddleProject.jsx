import React from "react";
import SmallCard from "./SmallCard";
import { FaCameraRetro } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { GiAnimalSkull } from "react-icons/gi";
import { SiStylelint } from "react-icons/si";




const AfterMiddleProject = () => {
  return (
    <>
      <div className="w-full text-black font-Roboto  h-[50vh] lg:flex ">
        <div className="h-[50vh]  w-[50vw] ">
          <div className="">
            <h1 className=" py-5 text-4xl p-0 lg:pl-6 text-center">
              7 years of experience in Photography
            </h1>
            <div className="flex justify-center">
            <h1 className="text-center lg:w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae fugiat, excepturi nemo in cumque, consectetur iure ?
            </h1>
            </div>
            <div className="flex justify-center">
            <img
              src="./7.jpeg"
              alt=""
              className="  mt-[5%] 
              transition duration-700 transform hover:scale-101 hover:shadow-lg
              "
            />
           </div>
          </div>
        </div>
        <div className="flex mt-[30%] lg:mt-[0px] ">
          <div className="w-[25vw]  ">
            <div
              className="mt-[4vh]  ml-6 w-[33vw] 
      
      
      "
            >
              <h1 className="text-6xl bg-white inline 
              
              "><FaCameraRetro /></h1>
              <SmallCard />
            </div>
            <div
              className="mt-[16vh]  px-1 w-[33vw] 
        ml-6
      
      "
            >
              <h1 className="text-6xl  inline"><GiAnimalSkull /></h1>
              <SmallCard />
            </div>
          </div>

          <div className="w-[25vw] ">
            <div
              className="mt-[4vh]  px-1 w-[33vw] 
      ml-6
      
      "
            >
              <h1 className="text-6xl bg-white inline"><GiLovers /></h1>
              <SmallCard />
            </div>
            <div
              className="mt-[16vh] px-1 w-[33vw] 
       ml-6
      
      "
            >
              <h1 className="text-6xl bg-white inline"><SiStylelint /></h1>
              <SmallCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterMiddleProject;
