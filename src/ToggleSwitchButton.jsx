import React, { useState } from 'react'

function ToggleSwitchButton() {
    const[isOn,setIsOn]=useState(false)
    const toggleSwitch=()=>{
        setIsOn(PrevState=>!PrevState)
    }
  return (
    <div>
      <h4>The Switch is: {isOn?'ON':'OFF'}</h4>
      <button onClick={toggleSwitch}>{isOn?'TurnOFF':'TurnON'}</button>
    </div>
  )
}

export default ToggleSwitchButton
