import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "./todoContext";

const Todolist = () => {
  const { todoItems, setTodoItems } = useContext(Mycontext);
  const initialText =
  todos.find((todo) => todo.id === parseInt(id))?.text || "";
  const [input, setinput] = useState(initialText);

  const inputHandler = (e) => {
    setinput(e.target.value);
    console.log(input);
  };

  function handleChange() {
    setTodoItems([...todoItems, { id: Date.now(), text: input }]);
    setinput("");
  }


  const navigate = useNavigate();


  const handledelete = (id)=>{
 
 setTodoItems(
   todoItems.filter((item)=>item.id!==id)
 )
  }
  return (
    <div className=" mx-auto bg-white shadow-md overflow-hidden sm:rounded-lg mt-[100px]">
      <div className="p-4 bg-gray-100">
        <div className="flex">
          <input
            value={input}
            onChange={inputHandler}
            type="text"
            className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter your todo"
          />
          <button
            onClick={handleChange}
            className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Todo
          </button>
        </div>

        {todoItems.map((item, index) => {
          return (
            <div key={index} className="flex justify-between px-3 my-5">
              <h1 className="text-2xl font-bold">{item.text}</h1>
              <div>
                <button
                  onClick={() => navigate(`/update/${item.id}`)}
                  className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  update
                </button>

                <button
                onClick={()=>handledelete(item.id)}
                className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
