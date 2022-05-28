import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Background from "../UI/organisms/Background/background";
import Todo from "../UI/organisms/Todo/Todo";

function Main() {
    const { theme } = useContext(ThemeContext);
    const [appHeight, setAppHeight] = useState(window.innerHeight)

    const getAppHeight = (value) => {
        setAppHeight(value)
    }

    console.log(appHeight)
    return (
        <main data-theme={theme}>
            <Background appHeight={appHeight}>
                <Todo getAppHeight={getAppHeight} />
            </Background>
        </main>
    );
}

export default Main;
