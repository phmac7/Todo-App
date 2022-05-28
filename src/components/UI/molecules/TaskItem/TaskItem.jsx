import React from 'react'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import styles from './TaskItem.module.scss'

function TaskItem({ task }) {
    return (
        <div className={styles['task__list--item-flex']}>
            <Checkbox />
            <span className={styles['task__list--text']}>{task}</span>
        </div>
    )
}

export default TaskItem