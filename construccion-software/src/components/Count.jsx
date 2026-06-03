import React, { useState } from 'react'
import "../index.css"

export const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <p>Count: {count}</p>
        <button onClick={() => {setCount(count + 1); console.log(count) }} className='counter'>SUMA</button>
    </>


  )
}

export default Count
