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
                <span className={styles['filters__items-left']}>{counter} item{`${counter === 1 ? '' : 's'}`} left</span>
                <div className={styles['filters__filter']}>
                    <button
                        onClick={() => setFilter('all')} className={`${styles['filters__filter--all']} ${styles['filters__filter--button']} ${filter === 'all' ? styles['filter-active'] : ''}`}>
                        <span >All</span>
                    </button>
                    <button
                        onClick={() => setFilter('active')} className={`${styles['filters__filter--all']} ${styles['filters__filter--button']} ${filter === 'active' ? styles['filter-active'] : ''}`}>
                        <span>Active</span>
                    </button>
                    <button
                        onClick={() => setFilter('completed')} className={`${styles['filters__filter--all']} ${styles['filters__filter--button']} ${filter === 'completed' ? styles['filter-active'] : ''}`}>
                        <span >Completed</span>
                    </button>
                </div>
                <button className={`${styles['filters__filter--button']} ${styles['filters__clear-completed']}`}
                    onClick={removeCompletedTasks}>
                    <span
                    >
                        Clear Completed
                    </span>
                </button>
            </div>
        </Card>
    )
}

export default TaskFilters