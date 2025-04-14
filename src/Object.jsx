import React from 'react'

function Object() {
    let Person= {
        name:"Amar",
        age:23,
        height:5.7
    }
    let{name,age,height}=Person // Destructuring
  return (
    <div className='main'>
      <h3>Person details are:</h3>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Height:{height}</p>
    </div>
  )
}

export default Object
