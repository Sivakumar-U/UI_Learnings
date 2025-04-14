import React from 'react'

function EventHandle3() {
    let handleMouseOver=()=>{
        alert("I said don't touch")
    }
  return (
    <div>
      <h2 onMouseOver={handleMouseOver}>Dont touch me</h2>
    </div>
  )
}

export default EventHandle3
