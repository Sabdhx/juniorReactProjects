import React, { useState } from "react";

const InputFunctionality = () => {
  const arrayOfGmails = [
    { g: "abdullah", name: "syedaliabdullahshah5@gmail.com", id: "1" },
    { g: "ali", name: "syedali743@gmail.com", id: "2" },
    { g: "quershi", name: "umarQuershiBatman@gmail.com", id: "3" },
    { g: "hayat", name: "UmarHayatAbassi@gmail.com", id: "4" },
    { g: "raheem", name: "raheemazeem250@gmail.com", id: "5" },
  ];

  const [input, setInput] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);
  const [newstate, setNewstate] = useState([]);

  const inputHandling = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInput(inputValue);
    const filteredValueVariable = arrayOfGmails.filter((item) => {
      return item.name.toLowerCase().startsWith(inputValue);
    });
    setFilteredValue(filteredValueVariable);
  };

  const handleItemClick = (clickedItem) => {
    setNewstate((prevState) => [...prevState, clickedItem]);
    setInput("");
  };

  const handleDeleteClick = (index) => {
    const newState = [...newstate];
    newState.splice(index, 1);
    setNewstate(newState);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-500 py-4 px-4 rounded-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => inputHandling(e)}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Enter Gmail address..."
      />
      {/* Render filtered items only if input is not empty */}
      {input !== "" && (
        <div className="mt-2">
          {filteredValue.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white cursor-pointer p-2 rounded-lg mb-1"
              onClick={() => handleItemClick(item.g)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
      <div className="px-3">
        {newstate.map((item, index) => (
          <div key={index} className="flex items-center text-white  w-[19vw]">
          
            <h1 className="px-3 my-1 inline rounded-lg mr-2 bg-black cursor-pointer text-sm ">{item}<span
             className=" px-2  rounded-lg "
             onClick={() => handleDeleteClick(index)}
             
            > X</span></h1>
        
           
             
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputFunctionality;