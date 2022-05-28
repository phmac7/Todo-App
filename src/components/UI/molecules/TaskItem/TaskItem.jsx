import React, { useContext, useState } from 'react'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Cross from '../../atoms/Svg/Cross'
import styles from './TaskItem.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'


function TaskItem({ task, id }) {
    const { taskList, toggleCompleted, toggleNotCompleted, removeTaskHandler } = useContext(TaskListContext)
    const [isCompleted, setIsCompleted] = useState(false)
    const getToggle = () => {
        if (taskList.find((task) => task.id === id).completed === false) {
            toggleCompleted(taskList, id)
            setIsCompleted(true)
        } else {
            toggleNotCompleted(taskList, id)
            setIsCompleted(false)
        }
    }
    return (
        <div className={styles['task__list--item-flex']}>
            <Checkbox isCompleted={isCompleted} onClick={getToggle} />
            <span className={`${styles[`task__list--text`]} ${isCompleted ? styles.checked : ''} `}>{task}</span>
            <button type='button' className={styles['cross-button']} onClick={() => removeTaskHandler(id)}>
                <Cross />
            </button>
        </div>
    )
}

export default TaskItem