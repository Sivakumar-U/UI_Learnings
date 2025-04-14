import React, { useState } from 'react'

function FunctionalCounter() {
    const[count, setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

  return (
    <div>
      <h4>Count value: {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default FunctionalCounter
