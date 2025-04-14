import React from 'react'

function InternalStyling() {
    let myStyle={
        textAlign:"center",
        color:"blue",
        backgroundColor:"yellow",
        padding:"10px"
    }

  return (
    <div style={myStyle}>
      <h2>This is Heading</h2>
      <p>This is Paragraph</p>
    </div>
  )
}

export default InternalStyling
