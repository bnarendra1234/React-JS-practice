import { useReducer } from "react";

const myReducer = (state, action) => {
  //It contain logic to update state value
  if (action.type === "inc") {
    state = state + action.payload;
  } else if (action.type === "dec") {
    state = state - action.payload;
  } else {
    state = 0;
  }
  return state;
};

function UseReducerComp() {
  const [state, dispatch] = useReducer(myReducer, 0);
  return (
    <div className="useReducerStyle">
      <h1>Count Value is : {state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "inc", payload: 1 });
        }}
      >
        incCount
      </button>

      <button
        onClick={() => {
          dispatch({ type: "inc", payload: 5 });
        }}
      >
        incCount by 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "dec", payload: 1 });
        }}
      >
        decCount
      </button>

      <button
        onClick={() => {
          dispatch({ type: "dec", payload: 3 });
        }}
      >
        decCount by 3
      </button>

      <button onClick={dispatch}>reset</button>
    </div>
  );
}

export default UseReducerComp;