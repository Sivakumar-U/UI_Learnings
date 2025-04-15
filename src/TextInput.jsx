import React, { useState } from 'react'

function TextInput() {
    const[text,setText]=useState("")
  return (
    <div>
      <input type="text" 
             value={text}
             onChange={(event)=>setText(event.target.value)}/>
             
      <p>You typed: {text}</p>
    </div>
  )
}

export default TextInput
