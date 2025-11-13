import "./App.css";
import { useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import UserList from "./components/map/UserList.jsx";
import Users from "./components/map/Users.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />

      <UserList/>
      <Users/>
    </div>
  );
}

export default App;