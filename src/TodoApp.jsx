import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    if (name && description) {
      setTodos([...todos, { name, description, completed: false }]);
      setName("");
      setDescription("");
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="bg-[#333333] w-full min-h-screen">
      <div className="pt-16">
        <h1 className="text-white text-center text-[40px] font-medium">
          My Todos
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-5 p-5 justify-between bg-[#444444] items-center w-[90%] md:w-[60%] m-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full md:w-auto">
          <div className="flex flex-col md:w-52 w-full">
            <label
              className="font-medium text-white text-[18px]"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="mt-1 w-full md:w-52 font-medium pl-3 text-black h-8 rounded-[10px] border-[#FF9900] border"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:w-52 w-full">
            <label
              className="font-medium text-white text-[18px]"
              htmlFor="Description"
            >
              Description
            </label>
            <input
              className="mt-1 w-full md:w-52 font-medium pl-3 text-black h-8 rounded-[10px] border-[#FF9900] border"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="bg-[#FF9900] font-bold rounded-[50px] p-2 pr-4 pl-4"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row mt-5 p-3 justify-between bg-[#444444] items-center w-[90%] md:w-[60%] text-white m-auto"
        >
          <div className="flex flex-col">
            <h1
              className={`text-[30px] ${
                todo.completed ? "line-through" : "text-[#F49403]"
              } font-medium`}
            >
              {todo.name}
            </h1>
            <p className="font-medium">{todo.description}</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              className="text-[#5DD1D9] bg-white border-[#5DD1D9] border-2 font-bold rounded-[50px] p-2 pr-4 pl-4"
              onClick={() => completeTodo(index)}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="text-[red] bg-white border-[red] border-2 font-bold rounded-[50px] p-2 pr-4 pl-4"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
