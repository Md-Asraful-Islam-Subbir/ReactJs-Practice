import React from 'react'
import { useEffect } from "react";

const ReactUseEffect = () => {
  const [count, setCount]=React.useState(0);

   useEffect(()=>{
  console.log("Count value updated:",count);
    },[count]);


  return (
    <div className='container effect-container'>
      <h1>useEffect Hook</h1>
      <p>Count: {count}</p>
      <button className='border shadow p-2 bg-amber-200' onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default ReactUseEffect