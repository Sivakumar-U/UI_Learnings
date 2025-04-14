import React from 'react'

//Option:1(Using props)
// function Display(props){
//     return(
//         <div>
//             <ul>
//                 {props.array.map(n=><li>{n}</li>)}
//             </ul>
//         </div>

//     )
// }

//option:2(Using destructuring)
function Display({ array }) {
    return (
      <ul>
        {array.map(n =><li>{n}</li>)}
      </ul>
    );
}
  

function Array1() {
  return (
    <div>
      <Display array={[10,20,30,40,50,10]}/>
    </div>
  )
}

export default Array1
