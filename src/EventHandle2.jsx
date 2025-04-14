import React from 'react'

function EventHandle2() {
    let handleChange=()=>{
        console.log("Typing: "+event.target.value)
    }
  return (
    <div>
      <input type="text" onChange={handleChange} placeholder='type here'/>
    </div>
  )
}

export default EventHandle2
