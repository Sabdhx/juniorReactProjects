import React from "react";

const Navbar = () => {
  return (
    <div className=" w-screen block sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
      <img
        src="https://www.hdwallpapers.in/download/demon_slayer_zenitsu_agatsuma_taking_sword_with_white_background_hd_anime-HD.jpg"
        alt=""
        className="absolute w-screen md:h-[60vh] sm:h-[50vh] md:cover lg:h-[70vh] cover opacity-40 object-cover h-[50vh]"
      />
      <div className="flex justify-between">
      <div className="grid grid-cols-1 sm:flex lg:flex">
        

  <div className="flex text-[12px] font-bold w-[70%] my-4 lg:text-[20px] md:text-[17px]">
    <h1 className="mx-2">Home</h1>
    <h1 className="mx-2">AboutUs</h1>
    <h1 className="mx-2">Portfolio</h1>
    <h1 className="mx-2">Catogary</h1>
    <h1 className="mx-2">ContactUs</h1>
  </div>


  <div className="ml-4 py-6 p-5">
    <h1 className="text-5xl lg:text-[100px] md:text-[80px]">
      Creative photography Movements
    </h1>
    <h1 className="text-[1rem]">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, dicta
      eum perferendis eius deserunt tempora dolorum laboriosam! Beatae neque
      assumenda at, velit magni non eligendi ut vero doloribus modi voluptate.
    </h1>
    <button className="my-3 bg-gray-100 text-black px-4 py-1 rounded-3xl text-[1rem] shadow-3xl lg:px-[34px] lg:py-2 hover:bg-gray-400">
      book now
    </button>
  </div>

</div>
      </div>
    </div>
  );
};

export default Navbar;
