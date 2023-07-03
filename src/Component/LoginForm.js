// LoginForm.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../Assets/login.illustration.jpg";
import Navbar from "./LandingPage/Navbar";
function LoginForm() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/Users")
      .then((rep) => rep.json())
      .then((data) => setUsers(data));
  }, []);

  let navigate = useNavigate();

  function checkUser() {
    users.filter((user) => {
      if (user.email === email && user.password === password) {
        sessionStorage.setItem("id", user.id);
        navigate("/Home");
      } else {
        console.log("no");
      }
    });
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="side-img">
              <img src={login} alt="login figure" />
            </div>
            <div className="form-wrap">
              <form className="log-in-form">
                <div className="header">
                  <h1>Nice to see you again!</h1>
                  <h2>Sign In</h2>
                </div>
                <div className="form-item">
                  <div className="input-wrap">
                    <label htmlFor="email">Email*</label>
                    <br />
                    <br />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="example@example.com"
                      className="input-field"
                    />
                    <br />
                    <br />
                    <br />
                    <label htmlFor="password">Password*</label>
                    <br />
                    <br />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      placeholder="Enter Your Password"
                      className="input-field"
                    />
                    <br />
                    <br />
                    <br />
                    <button
                      onClick={checkUser}
                      type="submit"
                      className="sign-btn"
                      id="sign-btn"
                    >
                      Login
                    </button>
                  </div>
                  <br />
                  <p className="text">
                    Don’t have an account?
                    <Link to="/RegistrationForm">SignUp</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginForm;
