import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Background from "../UI/organisms/Background/background";
import Todo from "../UI/organisms/Todo/Todo";

function Main() {
  const { theme } = useContext(ThemeContext);
  return (
    <main data-theme={theme}>
      <Background />
      <Todo />
    </main>
  );
}

export default Main;
