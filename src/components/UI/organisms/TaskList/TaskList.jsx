import React, { useContext, useId } from 'react'
import Card from '../../atoms/Card/Card'
import TaskItem from '../../molecules/TaskItem/TaskItem'
import styles from './TaskList.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'

function TaskList() {
    const { taskList } = useContext(TaskListContext)
    return (
        <ul className={styles['task__list']}>

            {typeof (taskList) === 'undefined' ? null :

                taskList.map((task) => {
                    return (
                        <li
                            className={styles['task__list--item']}
                            key={task.id}
                        >
                            <Card>
                                <TaskItem task={task.task} id={task.id} />
                            </Card>
                        </li>
                    )
                })}

        </ul>
    )
}

export default TaskList