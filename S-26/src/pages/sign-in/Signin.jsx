import "./Signin.css";
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In</h2>

        <div>
          <input type="email" placeholder="Email Id" />
        </div>

        <div>
          <input type="password" placeholder="Password" />
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="button">Sign In</button>
        </div>

        <div className="forgot-password">
          <span>
            Don't you have account ? <Link to="/sign-up">Signup</Link>
          </span>
          <span>
            <Link to="/forgot-password">Forgot password</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signin;