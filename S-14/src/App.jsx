import "./App.css";
import "./components/props-drilling/MyStyles.css"
import Navbar from "./components/nav-bar/Navbar";
import AllCategories from "./components/all-categories/AllCategories";
import Ad from "./components/ad/Ad";
import Footer from "./components/footer/Footer.jsx";
import A from "./components/props-drilling/A.jsx";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <A />
    </div>
  );
}

export default App;