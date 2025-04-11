import React, {useState} from 'react'

function WelcomeBox() {
    const[name, setName]=useState('')
  return (
    <div className='main'>
      <input type="text" placeholder='Enter your name' value={name} onChange={(event)=>setName(event.target.value)} />
      <h2>Welcome, {name || 'Guest'}!</h2>
    </div>
  )
}

export default WelcomeBox
