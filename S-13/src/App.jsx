import "./App.css";

import NavBar from "./components/nav-bar/NavBar";
import Title from "./components/state/Title";
import NewTitle from "./components/state/Newtitle.jsx"
import Task1 from "./components/state/task1.jsx";
import Image from "./components/state/Image.jsx";
import AllCategories from "./components/all-categories/AllCategories.jsx"
import Counter from "./components/state/Counter.jsx";
function App() {
  return (
    <div className="app">
      <NavBar />
      <AllCategories/>
      <Image/>
      <Counter/>
      
      
      
    </div>
  );
}

export default App;