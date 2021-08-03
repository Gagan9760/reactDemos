import React from 'react'

const Item = ({ setSub,sub,item }) => {
    function remove(){
        setSub(sub.filter((e)=> e.ky != item.ky))

    }
    return (
        <div className="todocontainer">
            <li className="todoitem">{item.text}</li>
            <button className="close" onClick={remove} >X</button>
        </div>
    )
}
export default Item