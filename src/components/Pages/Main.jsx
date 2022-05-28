import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Todo from "../UI/organisms/Todo/Todo";

function Main() {
    const { theme } = useContext(ThemeContext);
    return (
        <main data-theme={theme}>
            <Todo />
        </main>
    );
}

export default Main;
