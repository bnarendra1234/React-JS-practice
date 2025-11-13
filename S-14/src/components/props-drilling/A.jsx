import { useState } from "react";
import "./MyStyles.css";
import B from "./B";
function A() {
  const [state, setState] = useState("Rohan Jaiswal");
  return (
    <div className="a-container">
      <h2>A Component</h2>
      <B aData={state} />
    </div>
  );
}

export default A;