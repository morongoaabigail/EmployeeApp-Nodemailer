import React, { useState } from "react";
import { auth } from "../../Firebase";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => navigate("/home"))
      .catch((error) => console.error());
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div style={{ width: "400px" }}>
        <div>
          <h2>Login</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
              className="form-control"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="off"
              className="form-control"
              type="password"
              name="password"
              required
            />
          </div>

          <div className="button-group text-center">
            <button
              onClick={SignIn}
              className="btn btn-pink" // Assuming btn-pink is a custom class for pink color
              style={{ borderRadius: "20px" }}
            >
              Sign In
            </button>

            {/* Removed the Forgot password link */}
            
            <p>
              Don't have an account?
              <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
