import { useState } from "react";

function UserList() {
  const [state, setState] = useState([
    "ravi","sai","kiran","raj","ramu"
  ]);

  return (
    <div style={{ padding: "50px" }}>
      <h1>User List</h1>
      {state.map(function (element, index) {
        return (
          <div key={index + 100}>
            <p>{element}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;