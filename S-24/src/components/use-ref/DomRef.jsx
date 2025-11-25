import { useRef } from "react";

function DomRef() {
  const h1Ref = useRef();
  const inputRef = useRef();

  const handleDOM = () => {
    //get DOM element of input

    // var data = inputRef.current.value;
    var inputDomelement = inputRef.current;
    var data = inputDomelement.value;

    //get the DOM element of h1
    h1Ref.current.innerText = data;
    h1Ref.current.style.color = "red";
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1 ref={h1Ref}>Welcome to Ref concept</h1>
      <br />
      <input
        ref={inputRef}
        style={{ padding: "11px" }}
        type="text"
        placeholder="enter something"
      />
      <br />
      <br />
      <button onClick={handleDOM}>Submit</button>
    </div>
  );
}

export default DomRef;