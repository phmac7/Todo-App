import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

export const TaskListContext = React.createContext({})

const TaskListProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState('')

    const onChangeTaskHandler = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault()
        setTaskList(prev => [...prev, {
            id: uuidv4(),
            task: newTask,
            completed: false
        }])
        setNewTask('')
    }

    const toggleCompleted = (taskList, id) => {
        setTaskList(taskList.map(item => item.id === id ? { ...item, completed: true } : item))
    }

    const toggleNotCompleted = (taskList, id) => {
        setTaskList(taskList.map(item => item.id === id ? { ...item, completed: false } : item))
    }


    const removeTaskHandler = (id) => {
        let filteredArray = taskList.filter(item => item.id !== id)
        setTaskList(filteredArray);
    }


    return (
        <TaskListContext.Provider value={{ taskList, addTask, newTask, onChangeTaskHandler, setTaskList, toggleCompleted, toggleNotCompleted, removeTaskHandler }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListProvider