import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div id="brandName">
        <h1>Narendra Mart</h1>
      </div>

      <div id="menus">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        {/* <button>Logout</button> */}
      </div>
    </div>
  );
}

export default Navbar;