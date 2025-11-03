import "./App.css";

import NavBar from "./components/nav-bar/NavBar";
import Title from "./components/state/Title";
import NewTitle from "./components/state/Newtitle.jsx"
import Task1 from "./components/state/task1.jsx";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Title/>
      <NewTitle/>
      <Task1/>
    </div>
  );
}

export default App;