import React, { useRef, useEffect } from "react";
import Header from "../../molecules/Header/Header";
import NewTask from "../../molecules/NewTask/NewTask";
import TaskList from "../TaskList/TaskList";
import styles from "./Todo.module.scss";

function Todo({ getAppHeight }) {
    const todoContainer = useRef()

    useEffect(() => {

        getAppHeight(todoContainer.current?.clientHeight)
    }, [todoContainer])

    return (
        <div className={styles.container} ref={todoContainer}>
            <Header />
            <NewTask />
            <TaskList />
        </div>
    );
}

export default Todo;
