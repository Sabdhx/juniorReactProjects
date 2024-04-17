import React, { useState } from "react";

const TotallyDifferentTodoList = () => {
  const [input, setInput] = useState("");
  const [AddingTask, setAddingTask] = useState([]);
  const [EditingTasks, setEditingTasks] = useState(null);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleDeleteButton(id) {
    const filteredTodos = AddingTask.filter((todo) => todo.id !== id);
    setAddingTask(filteredTodos);
  }

  function handleUpdateButtonClick(item) {
    setEditingTasks(item);
    setInput(item.name);
  }

  function handleUpdateButton(id) {
    const updatedTodos = AddingTask.map((todo) =>
      todo.id === id ? { ...todo, name: input } : todo
    );
    setAddingTask(updatedTodos);
    setEditingTasks(null);
    setInput("");
  }

  function handleAddingTask() {
    const newTodo = { name: input, id: Date.now().toString() };
    setAddingTask((prevVal) => [...prevVal, newTodo]);
    setInput("");
  }

  return (
    <div className="flex justify-start mt-20 pl-0">
      <div className="flex flex-col">
        <div className="mb-4 absolute ml-[40%]">
          <input
            type="text"
            name=""
            onChange={(e) => handleInput(e)}
            value={input}
            className="bg-gray-400 rounded-lg py-1 px-3"
            placeholder="Add a todo..."
          />
          <button
            onClick={handleAddingTask}
            className="bg-blue-400 px-4 py-1 ml-3 rounded-lg"
          >
            Add
          </button>
        </div>
        {AddingTask.map((item) => (
          <div
            key={item.id}
            className="bg-red-400 px-6 py-4 rounded-lg mb-4"
            style={{ width: "20vw" }}
          >
            {item.id === EditingTasks?.id ? (
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-white px-2 py-1 rounded-lg mr-2"
              />
            ) : (
              <span>{item.name}</span>
            )}
            <div>
              <button
                className="bg-red-400 px-3 rounded-lg mr-2"
                onClick={() => handleDeleteButton(item.id)}
              >
                Delete
              </button>
              <button
                className="bg-gray-400 px-3 rounded-lg"
                onClick={
                        () =>
                           EditingTasks?.id === item.id
                         ? handleUpdateButton(item.id)
                         : handleUpdateButtonClick(item)
                        }
              >
                {EditingTasks?.id === item.id ? "Save" : "Update"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotallyDifferentTodoList;
