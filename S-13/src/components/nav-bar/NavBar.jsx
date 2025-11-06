import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div id="brandName">
        <h1>Narendra Mart</h1>
      </div>

      <div id="menus">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Profile</a>
        <a href="">ContactUs</a>
        <a href="">Cart</a>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;