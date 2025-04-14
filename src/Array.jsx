import React from 'react'

function Array() {
    let nums=[10,20,30,40,50,60]
  return (
    <div>
      <h3>Array is: </h3>
      <ul>
        {nums.map(n=><li>{n}</li>)}
      </ul>
    </div>
  )
}

export default Array
