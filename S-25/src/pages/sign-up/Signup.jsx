import "./Signup.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="email" placeholder="Email Id" />
        </div>

        <div>
          <input type="password" placeholder="Password" />
        </div>

        <div>
          <input type="text" placeholder="City" />
        </div>

        <div>
          <select id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="button">Sign Up</button>
        </div>

        <div style={{ textAlign: "center", marginTop: "7px" }}>
          Do you have account ?{" "}
          <Link
            style={{
              color: "green",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/sign-in"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;