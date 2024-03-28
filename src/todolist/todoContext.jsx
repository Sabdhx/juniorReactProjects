import React, { createContext, useState } from "react";
export const Mycontext = createContext();



const object = [
  {id:"1" , text:"aliabdullah"},
  {id:"2" , text:"shah"},
  {id:"3" , text:"rizvi"}
]
const TodoContext = ({ children }) => {

    const [todoItems, setTodoItems] = useState(object)
    return (
        <Mycontext.Provider value={{ todoItems, setTodoItems }}>
            {children}
        </Mycontext.Provider>
    )
}

export default TodoContext