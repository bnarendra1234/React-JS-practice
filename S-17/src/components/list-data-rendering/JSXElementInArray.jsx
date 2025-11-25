import React from "react";

function JSXElementInArray() {
  var mydata = [<p>para-1</p>, <div>div-1</div>, <h3>title-3</h3>];

  return (
    <div style={{ padding: "50px" }}>
      <h1>JSX Element in Array </h1>
      {mydata}
    </div>
  );
}

export default JSXElementInArray;