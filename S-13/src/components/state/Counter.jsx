import React from "react";

import {useState} from "react";

function Counter()
{
const [count, setCount] = useState(0);

  function increaseCount() {
    // setCount(count + 2); // 0 +2  = 2
    // setCount(count + 3); // 0 +3 = 3
    // setCount(count + 5); // 0 +5 = 5
    // setCount(count + 7); // 0 +7 = 7
    //re-rendering  1 time

    //updater function
    setCount((prevState) => {
      //0
      //logic
      return prevState + 4;
    });

    setCount((prevState) => {
      // 5
      //logic
      return prevState + 6;
    });

    setCount((prevState) => {
      //11
      //logic
      return prevState + 12;
    });
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>Count Value is : {count}</h1>
      <br />
      <button onClick={increaseCount}>inc Count</button>
    </div>
  );
}

export default Counter;