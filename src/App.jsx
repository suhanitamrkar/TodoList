import { useContext, useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div >
        
          <TodoList />
        
      </div>
    </>
  );
}

export default App;
