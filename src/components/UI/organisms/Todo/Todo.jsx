import React, { useRef, useEffect } from "react";
import Header from "../../molecules/Header/Header";
import NewTask from "../../molecules/NewTask/NewTask";
import TaskList from "../TaskList/TaskList";
import styles from "./Todo.module.scss";

function Todo() {

    return (
        <div className={styles.container} >
            <Header />
            <NewTask />
            <TaskList />
        </div>
    );
}

export default Todo;
