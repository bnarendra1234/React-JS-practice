

import { useState, useRef } from "react";

function Ref() {
  const [state, setState] = useState(100);
  const obj = useRef(0);
  let x = 0;

  const increaseVariable = () => (x = x + 1);
  const increaseState = () => setState(state + 1);
  const increaseRef = () => (obj.current = obj.current + 1);

  const displayValues = () => {
    console.log("Variable Value:", x);
    console.log("State Value:", state);
    console.log("Ref Value:", obj.current);
  };

  return (
    <div className="useRefStyles">
      <h1>useRef Concept</h1>
      <button onClick={increaseVariable}>Increase variable value</button>
      <button onClick={increaseState}>Increase State Value</button>
      <button onClick={increaseRef}>Increase Ref Value</button>
      <button onClick={displayValues}>Display Values</button>
    </div>
  );
}

export default Ref;
