import React from 'react'

function PersonDetails2() {
    let Person={
        name:"Mahesh",
        age:44,
        height:6.0
    }
  return (
    <div className='main'>
      <h3>Person details are:</h3>
      <ul>
        {Object.entries(Person).map(([k,v])=><li>{k}: {v}</li>)}
      </ul>
    </div>
  )
}

export default PersonDetails2
