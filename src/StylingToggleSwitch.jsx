import React, { useState } from 'react'

function StylingToggleSwitch() {
    const[isOn,setIsOn]=useState(false)
    
    const toggleSwitch=()=>{
        setIsOn(PrevState=>!PrevState)
    }
  return (
    <div style={{textAlign:'center', marginTop:'50px', fontSize:'50px'}}> {/*Inline Styling */}
      <h4>The Switch is: {isOn?'ON':'OFF'}</h4>
      <button onClick={toggleSwitch}>{isOn?'TurnOFF':'TurnON'}</button>
    </div>
  )
}

export default StylingToggleSwitch
