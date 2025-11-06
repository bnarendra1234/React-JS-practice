import { useState } from "react";
import "./Title.css";

function Task1() {
  var [title, setTitle] = useState("My Default Title");
  let [para, setPara] = useState("React JS is a Library for Creating UI");

  function modify() {
    setTitle("Angular is a Framework");
    setPara("Angular helps to create Frontend Application");
  }

  return (
    <div className="title-container">
      <h2>{title}</h2>
      <br />
      <p>{para}</p>
      <br />
      <button onClick={modify}>Update </button>
    </div>
  );
}

export default Task1;