import React, { useState } from 'react'

function ToggleSwitch() {
    const[isOn,setIsOn]=useState(false); /* here, we set switch as OFF by giving useState value as false */
  return (
    <div>
      <h4>The switch is: {isOn?'ON':'OFF'}</h4> {/*used lambda expression */}
    </div>
  )
}

export default ToggleSwitch
