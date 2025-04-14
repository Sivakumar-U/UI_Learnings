import React from 'react'

//Option:2(Using destructuring)
// function Display({name, age}){ {/*Using Destructuring we are accesing the properties from parent1 component.*/}
//     return(
//         <h3>Welcome, {name}. you are {age} years old.</h3>
//     )
// }

//Option:1(using Props)
function Display(props){ // props means properties or arguments getting from parent1 component.
    return (
        <h3>Welcome, {props.name}. you are {props.age} years old.</h3>
    );
}

function Parent1() {
  return (
    <div className='main'>
      <Display name="Siva" age={23}/> {/*Calling child component and passing the arguments */}
    </div>
  )
}


export default Parent1
