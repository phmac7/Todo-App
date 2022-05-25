import { useState } from "react";
import Todo from "./components/Pages/Todo";
import styles from "./App.module.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <Todo />;
}

export default App;
