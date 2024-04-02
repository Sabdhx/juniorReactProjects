import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Slidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <input type="text" className="bg-gray-300 px-9 py-3 rounded-lg" />
      <button
        className="block ml-[5px] bg-blue-400 px-[100px] text-white rounded-lg  hover:bg-gray-700 transition-colors duration-500 my-5 py-3"
        onClick={() => {
          navigate("/ModalContext");
        }}
      >
        search
      </button>
    </div>
  );
};
export default Slidebar;
