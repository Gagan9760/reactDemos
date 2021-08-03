import React from 'react'

const Btn = ({value,setValue}) => {

    function counter() {
        setValue((valueNew) => valueNew = value + 1)

    }

    return (
        <div>
            <button onClick={counter}>Click me</button>
            <h1 className='count'>{value}</h1>
        </div>
    )
}

export default Btn
