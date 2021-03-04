import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/login.css";
import { auth } from "../firebase";

function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="outer">
        <div className="inner">
          <form>
            <h3>Register</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button
              onClick={signUp}
              type="submit"
              className="btn btn-dark btn-lg btn-block"
            >
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <Link to="/login">log in?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
