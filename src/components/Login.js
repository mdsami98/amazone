import React, { useState } from "react";
import "../css/login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // TODO some Firebase frangi login Staf here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="outer">
        <div className="inner">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              onClick={signIn}
              className="btn btn-primary btn-block"
            >
              Sign In
            </button>
            <p className="forgot-password text-right">
              Dom't have account <Link to="/signup">sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
