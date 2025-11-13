import "./App.css";
import { useState } from "react";
import Nav from "./components/context-api/use-case/Navbar.jsx";
import Main from "./components/context-api/use-case/Main.jsx";
import loginContext from "./components/context-api/use-case/loginContext.js";
function App() {
  const [state, setState] = useState(false);
  return (
    <div className="app">
      <loginContext.Provider value={{ state, setState }}>
        {state ? <Nav /> : null}
        <Main />
      </loginContext.Provider>
    </div>
  );
}

export default App;