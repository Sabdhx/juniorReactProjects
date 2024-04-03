import React from "react";

const Form = () => {
  return (
    <div className="mt-9 ">
      <h1 className="text-3xl center text-center ">
        discuss indivisual detail
      </h1>

      <input
        type="text"
        className="bg-transparent border border-black py-3 px-[50vw] block mt-3 rounded-lg hover:shadow-lg "

        name="Name"
        placeholder="Name"
      />

      <input
        type="text"
        className="bg-transparent border border-black py-3 px-[50vw] block mt-3 rounded-lg hover:shadow-lg"
        name="Name"
        placeholder="Email"
      />

      <input
        type="text"
        className="bg-transparent border border-black py-3 px-[50vw] block mt-3 rounded-lg hover:shadow-lg"
        name="Name"
        placeholder="Phone Number"
      />

      <input
        type="text"
        className="bg-transparent border border-black py-9 px-[50vw] block mt-3 rounded-2xl hover:shadow-lg"
        name="Name"
        placeholder="Message"
      />

      <button className="my-3 bg-gray-800 text-white px-[56px] py-1 rounded-3xl text-[1rem] hover:shadow-lg mx-[45vw] mt-7">
        Send
      </button>
    </div>
  );
};

export default Form;
