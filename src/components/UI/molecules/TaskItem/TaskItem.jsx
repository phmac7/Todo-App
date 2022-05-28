import React, { useContext, useState } from 'react'
import Card from '../../atoms/Card/Card'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Cross from '../../atoms/Svg/Cross'
import styles from './TaskItem.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'


function TaskItem({ task, id }) {
    const { taskList, toggleCompleted, toggleNotCompleted, removeTaskHandler, filter } = useContext(TaskListContext)
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

    const checkingFilter = () => {
        if (filter === 'active' && isCompleted === true) {
            return true
        } else if (filter === 'completed' && isCompleted === false) {
            return true
        }
    }


    return (
        <li
            className={`${styles['task__list--item']} ${checkingFilter() ? styles.hide : ''}`}
            key={task.id}
        >
            <Card>
                <div className={styles['task__list--item-flex']}>
                    <Checkbox isCompleted={isCompleted} onClick={getToggle} />
                    <span className={`${styles[`task__list--text`]} ${isCompleted ? styles.checked : ''} `}>{task}</span>
                    <button type='button' className={styles['cross-button']} onClick={() => removeTaskHandler(id)}>
                        <Cross />
                    </button>
                </div>
            </Card>
        </li>

    )
}

export default TaskItem