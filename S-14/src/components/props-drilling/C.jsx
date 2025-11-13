import React from "react";
import D from "./D";
import "./MyStyles.css";
function C(props) {
  return (
    <div className="c-container">
      <h2>C Component </h2>
      <D cData={props.bData} />
    </div>
  );
}

export default C;