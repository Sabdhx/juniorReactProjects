import React, { createContext, useState } from "react";

export const Mycontext = createContext();


const TodoContext = ({ children }) => {

  const object = [
    { id: "1", text: "aliabdullah" },
    { id: "2", text: "shah" },
    { id: "3", text: "rizvi" }
  ];

  const [todoItems, setTodoItems] = useState(object);
  console.log(todoItems);
  return (
    <Mycontext.Provider value={{ todoItems, setTodoItems }}>
      {children}
    </Mycontext.Provider>
  );
};
export default TodoContext;
