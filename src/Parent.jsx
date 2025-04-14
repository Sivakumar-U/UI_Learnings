import React from 'react'

function Child(){
    return(
        <h3>I am from child component</h3>
    )
}

function Parent() {
  return (
    <div className='main'>
        <h3>I am from main component</h3>
        <Child/> {/*Calling child component */}
    </div>
  )
}

export default Parent
