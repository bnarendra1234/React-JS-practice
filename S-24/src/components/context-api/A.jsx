import { useState } from "react";
import myContext from "./context.js";
import "./context-styles.css";
import B from "./B.jsx";
function A() {
  var [state, setState] = useState("Pune");
  return (
    <div className="a-context">
      <h2>A Component</h2>

      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;