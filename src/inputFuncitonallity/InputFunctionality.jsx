import React, { useState } from 'react';

const InputFunctionality = () => {
  const arrayOfGmails = [
    { name: "syedaliabdullahshah5@gmail.com", id: "1" },
    { name: "syedali743@gmail.com", id: "2" },
    { name: "umarQuershiBatman@gmail.com", id: "3" },
    { name: "UmarHayatAbassi@gmail.com", id: "4" },
    { name: "raheemazeem250@gmail.com", id: "5" }
  ];

  const [input, setInput] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);
  const [settingId, setSettingId] = useState("");

  const inputHandling = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInput(inputValue);
    const filteredValueVariable = arrayOfGmails.filter((item) => {
      return item.name.toLowerCase().startsWith(inputValue);
    });
    setFilteredValue(filteredValueVariable);
  };

  const handleItemClick = (clickedItem) => {
    setSettingId(clickedItem)
    setInput("");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <input
        type="text"
        value={input}
        onChange={(e) => inputHandling(e)}
        className='w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
        placeholder="Enter Gmail address..."
      />
      {/* Render filtered items only if input is not empty */}
      {input !== "" && (
        <div className="mt-2">
          {filteredValue.map((item) => (
            <div
              key={item.id}
              className='bg-black text-white cursor-pointer p-2 rounded-lg mb-1'
              onClick={() => handleItemClick(item.name)}

            >

              {item.name}
            </div>
          ))}
        </div>
      )}
      <div className='bg-gray-400 rounded-lg text-center '>{settingId}</div>
    </div>
  );
};

export default InputFunctionality;
