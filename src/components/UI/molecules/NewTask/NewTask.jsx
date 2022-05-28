import React, { useContext } from 'react'
import styles from './NewTask.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'

function NewTask() {
    const { addTask, newTask, onChangeTaskHandler } = useContext(TaskListContext)


    return (
        <form className={styles['newtask']} onSubmit={addTask}>
            <input className={styles['newtask__input']} type="text" placeholder="Create a new todo.." onChange={onChangeTaskHandler}
                value={newTask} />
            <span className={styles['newtask__enter-button']}></span>
        </form>
    )
}

export default NewTask