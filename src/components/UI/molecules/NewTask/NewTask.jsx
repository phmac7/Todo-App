import React from 'react'
import Card from '../../atoms/Card/Card'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import styles from './NewTask.module.scss'

function NewTask() {
    return (
        <form className={styles.newtask}>
            <input className={styles['newtask__input']} type="text" placeholder="Create a new todo.." />
            <span className={styles['newtask__enter-button']}></span>
        </form>
    )
}

export default NewTask