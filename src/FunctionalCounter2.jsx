import React, { useState } from 'react'

function FunctionalCounter2() {
    const [count, setCount]=useState(0)
  return (
    <div>
      <h4>Count Value:{count}</h4>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default FunctionalCounter2
