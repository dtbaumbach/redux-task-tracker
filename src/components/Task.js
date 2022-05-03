import React from 'react'
import '../style/Task.css'
import { useSelector } from 'react-redux'

const Task = () => {
    const task = useSelector((state) => state.task.value)
  return (
    <div className='task-container'>
        <h1 className='task-title'>{task.title}</h1>
        <h3 className='date'>{task.date}</h3>
    </div>
  )
}

export default Task