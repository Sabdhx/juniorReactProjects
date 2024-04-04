import React from "react";
import SmallCard from "./SmallCard";

const AfterMiddleProject = () => {
  return (

    <>
    <div className="w-screen h-[50vh] lg:flex ">
      <div className="h-[50vh]  w-[50vw]">
        <div className="ml-9">
          <h1 className=" py-5 font-bold text-3xl pl-6">
            7 years of experience in Photography
          </h1>
          <h1 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat, excepturi nemo in cumque, consectetur iure ?</h1>
          <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/demon-slayer-every-major-characters-age-height-birthday.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="" className=" rounded-lg" />
        </div>
      </div>
      <div className="flex mt-[3vh] ">
      <div className="w-[25vw]  "> 
      <div className="mt-[5vh]  px-1 w-[33vw] 
      lg:my-[12vh]
      
      "><SmallCard/></div>
      <div className="mt-[5vh]  px-1 w-[33vw] 
      lg:my-[12vh]
      
      "><SmallCard/></div>
      
      </div>

      <div className="w-[25vw] "> 
      <div className="mt-[5vh]  px-1 w-[33vw] 
      lg:my-[12vh]
      
      "><SmallCard/></div>
      <div className="mt-[5vh] px-1 w-[33vw] 
      lg:my-[12vh]
      
      "><SmallCard/></div>
      </div>
      </div>
     
    </div>
   
    </>
  );
};

export default AfterMiddleProject;
