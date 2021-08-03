import React from 'react'
import Item from './Item'
import { v4 } from 'uuid'

const List = ({sub,setSub,text,setText}) => {
    function textSubmit() {
        if (text === "") {
            alert('Enter a value')
        }
        else {
            setSub([...sub,
            {ky: v4(),
            text: text,
            completed: false}])
            setText('') 
        }
    }
    function textHandler(e) {
        setText(e.target.value)
    }
    return (        
        <>
        <div className="inputbox2">
        <input className="text" value={text} onChange={textHandler}></input>
            <button className="add" onClick={textSubmit}>Add</button></div>
            <div className="lp">
        <ul className="lp">
            {sub.map((list) => {
                return (
                    <Item key={list.ky} item={list} setSub={setSub} sub={sub} />   
                )
            } 
            )} 
        </ul>
        </div>
        </>
    )
}

export default List