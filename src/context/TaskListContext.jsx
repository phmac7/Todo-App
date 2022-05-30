import React, { useEffect, useCallback, useState } from 'react'
import { v4 as uuidv4 } from "uuid"


export const TaskListContext = React.createContext({
    taskList: [],
    newTask: '',
    filter: 'all'
})

const TaskListProvider = ({ children }) => {
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
    const [newTask, setNewTask] = useState('')
    const [filter, setFilter] = useState('all')


    const onChangeTaskHandler = useCallback((e) => {
        setNewTask(e.target.value)
    }, [newTask])


    const addTask = useCallback((e) => {
        e.preventDefault()
        if (/^\S/.test(newTask)) {
            setTaskList(prev => [...prev, {
                id: uuidv4(),
                task: newTask,
                completed: false
            }])
            setNewTask('')
        }
    }, [newTask])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList))
    }, [taskList])

    const toggleCompleted = (taskList, id) => {
        setTaskList(taskList.map(item => item.id === id ? { ...item, completed: true } : item))
    }

    const toggleNotCompleted = (taskList, id) => {
        setTaskList(taskList.map(item => item.id === id ? { ...item, completed: false } : item))
    }


    const removeTaskHandler = (id) => {
        if (typeof (taskList) === 'undefined') {
            return
        } else {
            let filteredArray = taskList.filter(item => item.id !== id)
            setTaskList(filteredArray);
        }
    }

    const removeCompletedTasks = () => {
        let filteredArray = taskList.filter(item => item.completed === false)
        setTaskList(filteredArray)
    }


    return (
        <TaskListContext.Provider value={{ taskList, addTask, newTask, onChangeTaskHandler, setTaskList, toggleCompleted, toggleNotCompleted, removeTaskHandler, removeCompletedTasks, filter, setFilter }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListProvider