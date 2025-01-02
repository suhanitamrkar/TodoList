import { useContext, useEffect, useState } from "react";


import TodoInput from "./components/TodoInput";
import { TodoCard } from "./components/TodoCard";
import TodoList from "./components/TodoList";
import { use } from "react";
import TodosContext from "./context/Provider";

function App() {
  
  return (
    <>
      <main>
        <TodoInput />
        <TodoList />
      </main>
    </>
  );
}

export default App;
