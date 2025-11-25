
import { useContext } from "react";
import "./context-styles.css";
import myContext from "./context";
import D from "./D.jsx"; // ✅ default import (matches export below)

function C() {
  const data = useContext(myContext);

  return (
    <div className="C-context">
      <h2>C Component : {data}</h2>
      <D /> {/* ✅ D component works fine */}
    </div>
  );
}

export default C;