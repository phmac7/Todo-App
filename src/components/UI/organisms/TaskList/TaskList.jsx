import React, { useContext, useId } from 'react'
import TaskFilters from '../../molecules/TaskFilters/TaskFilters'
import TaskItem from '../../molecules/TaskItem/TaskItem'
import styles from './TaskList.module.scss'
import { TaskListContext } from '/src/context/TaskListContext'
import { useDraggableContext, moveItems } from 'react-tiny-dnd'

function TaskList() {
    const { taskList, setTaskList } = useContext(TaskListContext)

    const onDrop = (dragIndex, overIndex) => {
        const nextItems = moveItems(taskList, dragIndex, overIndex);
        setTaskList(nextItems);
    };

    const context = useDraggableContext({
        onDrop,
    });

    return (
        <>
            <ul className={styles['task__list']}>

                {typeof (taskList) === 'undefined' ? null :

                    taskList.map((task, index) => {
                        return (
                            <TaskItem context={context} task={task.task} id={task.id} key={task.id} index={index} />
                        )
                    })}

                <TaskFilters />
            </ul>

        </>
    )
}

export default TaskList