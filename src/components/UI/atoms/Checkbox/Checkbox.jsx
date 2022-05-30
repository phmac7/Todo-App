import React from 'react'
import Check from '../Svg/Check'
import styles from './Checkbox.module.scss'

function Checkbox({ onClick, isCompleted }) {
    return (
        <button className={styles.checkbox__button}>
            <span onClick={onClick} className={`${styles.checkbox} ${isCompleted ? styles.checked : ''}`}>
                <Check />

                <span className={`${styles['aux']} ${isCompleted ? styles['hide-aux'] : ''}`}>
                </span>
            </span>
        </button>
    )
}

export default Checkbox