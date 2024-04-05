import React from "react";

const Navbar = () => {
  return (
    
    <div
   
    className=" w-screen block sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
      <img
        src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2014/05/photography-camera.jpg"
        alt=""
        className="absolute w-screen md:h-[60vh] sm:h-[50vh] md:cover lg:h-[70vh] cover object-cover h-[55vh]"
      />
      <div className="flex justify-between">
      <div className="grid grid-cols-1 sm:flex lg:flex">
        

  


  <div className="ml-4 py-6 p-5">
    <h1 className="text-6xl lg:text-[100px] text-white  font-dancing md:text-[80px] opacity-90 lg:mt-[7vh] lg:ml-[3vh]">
      Creative <span className="block">photography</span>  Movements
    </h1>
    <h1 className="text-[1rem] lg:ml-[3vh] opacity-90 font-tacone">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, dicta
      eum perferendis eius deserunt tempora dolorum laboriosam! Beatae neque
      assumenda at, velit magni non eligendi ut vero doloribus modi voluptate.
    </h1>
    <button className="my-3  text-white px-6 py-1 rounded-3xl text-[1rem] shadow-3xl lg:px-[37px] lg:ml-[3vh] lg:py-2 bg-[#464543] hover:bg-gray-800 opacity-90 transition duration-200">
  book now
</button>

  </div>
<div className="flex  text-[12px] font-md w-[70%] my-4 lg:text-[20px] md:text-[17px] opacity-90">
    <h1 className="mx-2 font-custom hover:text-[#46424F] transition duration-200">Home</h1>
    <h1 className="mx-2 hover:text-[#46424F] transition duration-200">AboutUs</h1>
    <h1 className="mx-2 hover:text-[#46424F] transition duration-200">Portfolio</h1>
    <h1 className="mx-2 hover:text-[#46424F] transition duration-200">Catogary</h1>
    <h1 className="mx-2 hover:text-[#46424F] transition duration-200">ContactUs</h1>
  </div>
</div>
      </div>
    </div>
  );
};

export default Navbar;
