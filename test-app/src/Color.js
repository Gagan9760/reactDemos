import React, { useState } from 'react'
import './Color.css'

const Color = () => {
    const [color, setColor] = useState('');
    const [head, setHead] = useState('');
    function colorChange(e) {
        setColor(e.target.value)
        setHead(e.target.selectedOptions[0].innerHTML)
    }
    return (
        <div className="color" style={{ backgroundColor: color }}>
            <h1 className="hc">{head}</h1>
            <select className="list" onChange={colorChange}>
                <option value="" >Select a color</option>
                <option value="#fc0101" name="Red">Red</option>
                <option value="#0158fc" name="Blue">Blue</option>
                <option value="#01fc17" name="Green">Green</option>
            </select>
        </div>
    )
}

export default Color
