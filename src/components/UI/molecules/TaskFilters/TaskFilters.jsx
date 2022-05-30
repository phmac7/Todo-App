import React, { useContext, useEffect, useState } from 'react'
import Card from '../../atoms/Card/Card'
import styles from './TaskFilters.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'

function TaskFilters() {
    const { taskList, removeCompletedTasks, setFilter, filter } = useContext(TaskListContext)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        typeof (taskList) === 'undefined' ? setCounter(0) : setCounter(taskList.filter((item) => item.completed === false).length)
    }, [taskList])

    return (
        <Card>
            <div className={styles.filters}>
                <span className={styles['filters__items-left']}>{counter} items left</span>
                <div className={styles['filters__filter']}>
                    <span onClick={() => setFilter('all')} className={`${styles['filters__filter--all']} ${filter === 'all' ? styles['filter-active'] : ''}`}>All</span>
                    <span onClick={() => setFilter('active')} className={`${styles['filters__filter--all']} ${filter === 'active' ? styles['filter-active'] : ''}`}>Active</span>
                    <span onClick={() => setFilter('completed')} className={`${styles['filters__filter--all']} ${filter === 'completed' ? styles['filter-active'] : ''}`}>Completed</span>
                </div>
                <span onClick={removeCompletedTasks} className={styles['filters__clear-completed']}>Clear Completed</span>
            </div>
        </Card>
    )
}

export default TaskFilters