import { useReducer } from "react";
/*
It replaces useState when:

You have multiple actions

You want a cleaner structure

You want predictable state transitions
*/
const UseReducer = () => {
    const reducer = (state, action) => {
  console.log(state, action);

  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }
};
const [count, dispatch] = useReducer(reducer, 0);
  return (
     <div className="p-4 h-lvh flex flex-col justify-center items-center ">
    <h1>{count}</h1>

    <button className='border shadow p-2 bg-green-400' onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

    <button className='border shadow p-2 bg-red-400' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
  </div>
  )
}

export default UseReducer