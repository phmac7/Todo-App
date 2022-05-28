import React from 'react'
import styles from './TaskItem.module.scss'

function TaskItem({ task }) {
    return (
        <span>{task}</span>
    )
}

export default TaskItem