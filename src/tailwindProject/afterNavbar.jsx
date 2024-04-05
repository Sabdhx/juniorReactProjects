import React from "react";

const AfterNavbar = () => {
  return (
    <div className="">
      <h1 className="text-black text-3xl  text-center my-9 lg:text-5xl">Portfolio</h1>

      <div class="flex flex-col lg:mx-[5%] justify-around sm:flex-row sm:grid-cols-1  ">
      <img
    src="./1.jpeg"
    alt=""
    class="image-with-shadow w-full sm:h-[45vh] lg:w-[27%] md:h-[60vh] lg:h-[80vh] object-cover mx-4 transition duration-700 transform hover:scale-105 hover:shadow-lg"
/>


        <img
          src="./2.jpeg"
          alt=""
          class="w-full sm:h-[45vh] lg:w-[27%] md:h-[60vh] lg:h-[80vh] object-cover mx-4  transition duration-700 transform hover:scale-105 hover:shadow-lg"
        />
        <img
          src="https://th.bing.com/th/id/R.3fe74ee4fd9c80c6ddcd2efb7f847fc8?rik=Myd%2bt7SObbQKUg&pid=ImgRaw&r=0 "
          alt=""
          class=" lg:w-[27%] w-full sm:h-[45vh] md:h-[60vh] lg:h-[80vh] object-cover  transition duration-700 transform hover:scale-105 hover:shadow-lg "
        />
      </div>

      <div class="flex flex-col lg:mx-[5%] justify-around sm:flex-row sm:grid-cols-1  my-[3%]">
        <img
          src="./4.jpeg"
          alt=""
          class="w-full sm:h-[45vh] md:h-[60vh] lg:h-[80vh] lg:w-[27%] object-cover mx-4 transition duration-700 transform hover:scale-105 hover:shadow-lg"
        />
        <img
          src="./5.jpg"
          alt=""
          class="w-full sm:h-[45vh] lg:w-[27%] md:h-[60vh] lg:h-[80vh] object-cover mx-4 transition duration-700 transform hover:scale-105 hover:shadow-lg"
        />
        <img
          src="./6.jpg"
          alt=""
          class=" lg:w-[27%] w-full sm:h-[45vh] md:h-[60vh] lg:h-[80vh] object-cover transition duration-700 transform hover:scale-105 hover:shadow-lg  "
        />
      </div>

    </div>
  );
};

export default AfterNavbar;
