import React, { useContext, useState, useCallback } from 'react'
import Card from '../../atoms/Card/Card'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Cross from '../../atoms/Svg/Cross'
import styles from './TaskItem.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'
import { useDraggable, Draggable, moveItems } from 'react-tiny-dnd'

function TaskItem({ task, id, context, index }) {
    const { taskList, toggleCompleted, toggleNotCompleted, removeTaskHandler, filter } = useContext(TaskListContext)
    const [isCompleted, setIsCompleted] = useState(taskList.find((task) => task.id === id).completed)
    const getToggle = () => {
        if (taskList.find((task) => task.id === id).completed === false) {
            toggleCompleted(taskList, id)
            setIsCompleted(true)
        } else {
            toggleNotCompleted(taskList, id)
            setIsCompleted(false)
        }
    }

    const checkingFilter = useCallback(() => {
        if (filter === 'active' && isCompleted === true) {
            return true
        } else if (filter === 'completed' && isCompleted === false) {
            return true
        }
    }, [filter, isCompleted])

    const {
        listeners, // Handler listeners can be passed to Draggable component as well
        isDragging,
    } = useDraggable(context, index);

    return (
        <Draggable context={context} key={id} index={index}>
            <li
                className={`${styles['task__list--item']} ${checkingFilter() ? styles.hide : ''}`}
                key={id}
                item={task}
                {...listeners}
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
        </Draggable>

    )
}

export default TaskItem