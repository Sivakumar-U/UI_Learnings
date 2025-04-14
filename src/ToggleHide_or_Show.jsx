import React, { useState } from 'react'

function ToggleHide_or_Show() {
    const[isVisible, setIsVisible]=useState(true)
  return (
    <div>
      <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?'Hide':'Show'}</button> {/* Button shows "Hide" when the content is visible,
                                                                                            Button shows "Show" when the content is hidden*/}
      {isVisible && <p>Content of Paragraph</p>} {/*This is conditional rendering — the paragraph only appears if isVisible is true */}
    </div>
  )
}

export default ToggleHide_or_Show
