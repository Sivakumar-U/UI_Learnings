import React from 'react'

function PersonDetails() {
    let Person={
        name:"Siva",
        age:28,
        height:5.11
    }
  return (
    <div className='main'>
      <h3>Person details are:</h3>
      <p>{JSON.stringify(Person)}</p>
    </div>
  )
}

export default PersonDetails
