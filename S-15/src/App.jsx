import "./App.css";
import "./components/context-api/context-styles.css"
import Main from "./components/context-api/use-case/Main.jsx";
import Nav from "./components/context-api/use-case/Navbar.jsx";

function App() {
  return (
    <div className="app">
      <Nav />
      <Main/>
    </div>
  );
}

export default App;