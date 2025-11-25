import { useContext } from "react";
import loginContext from "./loginContext";
import "./Navbar.css";
function Navbar() {
  const { setState } = useContext(loginContext);
  return (
    <div className="nav-bar">
      <button
        type="button"
        onClick={() => {
          setState(false);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;