import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Mycontext } from "./todoContext";

const UpdatePage = () => {
  const { id } = useParams();
  const { todoItems, setTodoItems } = useContext(Mycontext);
  const [input, setinput] = useState("");
  const [data, setData] = useState({});

  function check() {
    const test = todoItems.filter((item) => item.id == id);
    setinput(test[0].text);
    // setData(test[0].text);
    console.log(test[0].text);
  }
  useEffect(() => {
    check();
  }, []);

  const handleUpdate = () => {
    const updatedItems = todoItems.map((item) =>
      item.id == id ? { ...item, text: input } : item
    );
    setTodoItems(updatedItems);
    console.log("updated");
  };

  return (
    <div className="flex mx-[10rem] my-9">
      <input
        value={input}
        type="text"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        className="flex-1 block w-[200px] rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-500 py-3 "
      />
      <button
        onClick={()=> handleUpdate()} 
        className="bg-blue-500 w-[90px] rounded-lg mx-2"
      >
        update
      </button>
    </div>
  );
};

export default UpdatePage;
