import React, { useState } from "react";
import { TodoCard } from "./TodoCard";
import { FiPlus } from "react-icons/fi";

const TodoList = (props) => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //add new task functiom
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      compeleted: false,
      createdAt: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
    console.log(newTask);

    setText("");
  }

  //delete function
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //completed function
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, compeleted: !task.compeleted };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className={`app ${theme}`}>
     
      <button onClick={toggleTheme} className="bg-[#2563EB] text-white px-2 py-2 ">
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className="flex justify-center">
        <div className=" bg-[#DEE5D4] w-[500px] h-auto mt-5 mx-3 rounded-md  justify-center shadow-md sm:rounded-lg flex-col lg:w-[500px]  lg:h-auto ">
          <p className="text-[2rem] font-bold text-blue-600 text-center py-3 ">
            TODO LIST
          </p>
          <div className="flex justify-center  mt-5">
            <input
              value={text}
              placeholder="Enter Task"
              onChange={(e) => setText(e.target.value)}
              className="px-2 bg-slate-300  mx-3  shadow-md sm:rounded-md border border-blue-600  "
            />
            <button
              className="font-medium ml-3 flex items-center gap-2 bg-blue-600  text-white py-1 px-3
             rounded-sm dark:text-blue-500 "
              onClick={() => addTask(text)}
            >
              <FiPlus />
              Add
            </button>
          </div>
          <div className=" flex flex-col px-3 lg:ml-10 justify-center  py-2  ">
            {tasks.map((task) => (
              <TodoCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
