import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const CreateContext = createContext();

const ModalContext = ({children}) => {
  const [input, setinput] = useState("superman");
  const [searchMovies, setSearchMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingApi = async () => {
      if (input === "") {
        setinput("");
      } else {
        const key = `eca6ca52`;
        const URL = `https://www.omdbapi.com/?s=${input}&apikey=${key}`;
        {
          const response = await fetch(URL);
          const finalData = await response.json();
          console.log(finalData);
          if (finalData.Response === "True") {
            setSearchMovies(finalData.Search);
          }
        }
      }
    };
    fetchingApi();
  }, [input]);

  return (
    <>
      <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
              <h6 className="text-3xl font-semibold">
                <input
                  type="text"
                  className="bg-gray-300 rounded-lg"
                  value={input}
                  onChange={(e) => {
                    setinput(e.target.value);
                    console.log(input);
                  }}
                />
              </h6>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  close
                </span>
              </button>
            </div>

            <div className="relative flex-auto p-6"></div>

            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => {
                  navigate("/");
                }}
              >
                Close
              </button>
              <button
                className="text-black background-transparent
                  bg-blue-400 rounded-lg  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => {
                  navigate("/");
                }}
              >
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    
      
      <searchMovies.Provider value={{searchMovies,setSearchMovies}}>
        {children}
      </searchMovies.Provider>
      </>
  ); 
};

export default ModalContext;
