import { useState } from "react";

function Datarendering() {
  var [state, setState] = useState([10, 20, 30, true, "hello"]);
  return (
    <div style={{ padding: "50px" }}>
      <h1>Different Types of Data Rendering</h1>
      <h3>Data : {state}</h3>
    </div>
  );
}

export default Datarendering;