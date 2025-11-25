import { useContext } from "react";
import myContext from "./context";
import "./context-styles.css";
function E() {
  const data = useContext(myContext);
  return (
    <div className="E-context">
      <h2>E Component</h2>
      <p>Data : {data}</p>
    </div>
  );
}

export default E;