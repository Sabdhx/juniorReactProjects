import React from "react";

const Form = () => {
  return (
    <div className="mt-9 text-black">
      <h1 className="text-3xl center text-center font-tacone">
        Discuss indivisual detail
      </h1>
      <div className="flex justify-center">
        <h1 className="text-1xl mt-[1%] center text-center font-tacone w-[20%]">
          Leave us a Message so we can chat and Customize your session
        </h1>
      </div>

      <div className="flex justify-center">
        <input
          type="text "
          className="w-[50%] bg-transparent border border-black py-3 block mt-3 rounded-3xl  transition duration-700 transform hover:scale-101 hover:shadow-lg "
          placeholder="        Name"
        />
      </div>

      <div className="flex justify-center">
        <input
          type="text "
          className="w-[50%] bg-transparent border border-black py-3 block mt-3 rounded-3xl  transition duration-700 transform hover:scale-101 hover:shadow-lg "
          placeholder="        Email"
        />
      </div>

      <div className="flex justify-center">
        <input
          type="text "
          className="w-[50%] bg-transparent border border-black py-3 block mt-3 rounded-3xl   transition duration-700 transform hover:scale-101 hover:shadow-lg"
          placeholder="        Phone Number"
        />
      </div>

      <div className="flex justify-center">
        <input
          type="text "
          className="w-[50%] bg-transparent border border-black py-3 block mt-3 rounded-3xl  py-[5%] transition duration-700 transform hover:scale-101 hover:shadow-lg"
          placeholder="       Message "
        />
      </div>
      <div className="flex justify-center">
        <button className="my-3 text-white px-[56px] py-1 rounded-3xl text-[1rem] hover:shadow-lg mx-[45vw] mt-7 bg-[#464543]
    hover:bg-gray-800 opacity-90 transition duration-200
        ">
          Send
        </button>
      </div>
    </div>
  );
};

export default Form;
