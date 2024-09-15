import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import TodoInput from "./components/TodoInput";
import { TodoCard } from "./components/TodoCard";
import TodoList from "./components/TodoList";



function App() {
  

  return (
    <>
      <TodoInput />

      <TodoList  />
    </>
  );
}

export default App;
