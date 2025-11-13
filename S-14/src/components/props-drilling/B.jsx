import React from "react";
import "./MyStyles.css";
import C from "./C";
function B(props) {
  return (
    <div className="b-container">
      <h2>B Component </h2>
      <C bData={props.aData} />
    </div>
  );
}

export default B;