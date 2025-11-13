import "./App.css";
import { useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import { List } from './components/list-data-rendering/List.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <List />
    </div>
  );
}

export default App;