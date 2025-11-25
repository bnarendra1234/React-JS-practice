import "./App.css";
import { useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import UserList from "./components/map/UserList.jsx";
import Users from "./components/map/Users.jsx";
import Products from "./pages/products/Products.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
       <Products />
    </div>
  );
}

export default App;