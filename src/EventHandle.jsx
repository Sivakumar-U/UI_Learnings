import React from 'react'

function EventHandle() {
    let handleClick=()=>{
        alert("Button Clicked...")
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default EventHandle
