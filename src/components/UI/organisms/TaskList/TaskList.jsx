import React, { useId } from 'react'
import Card from '../../atoms/Card/Card'
import TaskItem from '../../molecules/TaskItem/TaskItem'
import styles from './TaskList.module.scss'

function TaskList() {

    const taskList = [{
        id: useId(),
        task: 'teste',
        completed: false
    }, {
        id: useId(),
        task: 'teste',
        completed: false
    }, {
        id: useId(),
        task: 'teste',
        completed: false
    }, {
        id: useId(),
        task: 'teste',
        completed: false
    }]

    return (
        <ul className={styles['task__list']}>
            {taskList.map((task) => {
                return (
                    <li
                        className={styles['task__list--item']}
                        key={task.id}
                    >
                        <Card>
                            <TaskItem task={task.task} />
                        </Card>
                    </li>
                )
            })}
        </ul>
    )
}

export default TaskList