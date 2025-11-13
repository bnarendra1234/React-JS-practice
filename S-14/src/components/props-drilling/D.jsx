import React from "react";
import "./MyStyles.css";
function D(props) {
  return (
    <div className="d-container">
      <h2>D Component</h2>
      <p>Data : {props.cData}</p>
    </div>
  );
}

export default D;