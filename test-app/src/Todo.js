import React, { useState } from 'react'
import List from './List'
import './todo.css'

const Todo = () => {
    const [text, setText] = useState('');
    const [sub, setSub] = useState([]);
    
    
    return (
        <div className="parent">
            <h1>Todo List</h1>
            <div className="inputbox">
            <List sub={sub} setSub={setSub} text={text} setText={setText}/>     
            </div>
        </div>

    )
}
export default Todo