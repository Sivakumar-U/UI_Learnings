import React from 'react'

// //Option:1(using Props)
// function Display(props){
//     return(
//         <div>
//             <h3>Name is: {props.Person.name}</h3>
//             <h3>Age is: {props.Person.age}</h3>
//             <h3>Height is: {props.Person.height}</h3>
//         </div>
//     )
// }

//Option:2(Using Destructuring)
function Display({ Person }) {
    let { name, age, height } = Person;
  
    return (
      <div>
        <h3>Name is: {name}</h3>
        <h3>Age is: {age}</h3>
        <h3>Height is: {height}</h3>
      </div>
    );
}
  

function Object1() {
    let Person={name:"Siva",age:23,height:5.7}
  return (
    <div className='main'>
      <Display Person={Person}/>
    </div>
  )
}

export default Object1
