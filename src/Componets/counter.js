import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  const handleClick2 = () => {
    setCounter(counter - 1)
  }
  
  return (
    <div id="co" >
      <div className="b1">
        <center>
          <h3>This is Counter made using JSX and ReactJs</h3><br/><br/>
        <div id="d1" >{counter}</div>
        <span>
          <div id="bt1">
        <button id="b1" onClick={handleClick2}>Decrement</button>
        <button id="b1" onClick={handleClick1}>Increment</button>
          </div>  
        </span>
        </center>
      </div>
    </div>
  )
}

export default Counter;