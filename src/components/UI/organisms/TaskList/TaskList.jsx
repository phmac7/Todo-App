import React, { useContext, useId } from 'react'
import Card from '../../atoms/Card/Card'
import TaskFilters from '../../molecules/TaskFilters/TaskFilters'
import TaskItem from '../../molecules/TaskItem/TaskItem'
import styles from './TaskList.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'

function TaskList() {
    const { taskList, filter } = useContext(TaskListContext)



    return (
        <>
            <ul className={styles['task__list']}>

                {typeof (taskList) === 'undefined' ? null :

                    taskList.map((task) => {
                        return (
                            <TaskItem task={task.task} id={task.id} key={task.id} />
                        )
                    })}

                <TaskFilters />
            </ul>

        </>
    )
}

export default TaskList