{/*Counter with functional component */}
import React, {useState} from 'react';

function Counter() {
    const [count, setCount]=useState(0);
  return (
    <div className='main'>
      <p>you clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  );
}

export default Counter;
