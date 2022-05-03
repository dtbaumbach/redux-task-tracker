import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTask } from '../features/task';
import '../style/Header.css'

const Header = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className='container'>
        <h1 className='title'>Task Tracker</h1>
        <div className='input-form'>
          <label>Task Name</label><br/>
          <input type={'text'} onChange={(event) => {setTitle(event.target.value)}}></input>
        </div>
        <div className='input-form'>
          <label>Date</label><br/>
          <input type={'text'} onChange={(event) => {setDate(event.target.value)}}></input>
        </div>
        <button className='btn'
        onClick={() => dispatch(setTask({title: title, date: date, id: 10}))}>
          Add Task
        </button>
    </div>

  )
}

export default Header