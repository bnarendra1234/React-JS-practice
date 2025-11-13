import { useState } from "react";




export function List() {
  const [state, setState] = useState([
    "viraj",
    "yash",
    "amit",
    "krish",
    "rohit",
    "sagar",
    "ashok",
    "manikanta",
  ]);

  const [list, setList] = useState([
    <li>Sneha</li>,
    <li>Riya</li>,
    <li>Ruhana</li>,
    <li>Vaishnavi</li>,
    <li>Pooja</li>,
  ]);
  return (
    <div style={{ padding: "50px" }}>
      <ol>
        <li>{state[0]}</li>
        <li>{state[1]}</li>
        <li>{state[2]}</li>
        <li>{state[3]}</li>
        <li>{state[4]}</li>
      </ol>
      <br />
      <ol>{list}</ol>
      <br />
      <br />
      <ul>
        {state.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;