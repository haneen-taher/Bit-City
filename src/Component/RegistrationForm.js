// RegistrationForm.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Reg from "../Assets/Reg.illustration.jpg";
import Navbar from "./LandingPage/Navbar";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    axios
      .get(`http://localhost:3001/users?email=${email}`)
      .then((response) => {
        if (response.data.length > 0) {
          setError("Email already exists");
        } else {
          const newUser = {
            name,
            email,
            password,
          };

          axios
            .post("http://localhost:3001/users", newUser)
            .then((response) => {
              console.log(response.data);
              setError("");
              setName("");
              setEmail("");
              setPassword("");
              navigate("/home");

              // swal("Good job!", "You clicked the button!", "success");
            })
            .catch((error) => {
              console.error(error);
              setError("An error occurred");
            });
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred");
      });
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="side-img">
              <img src={Reg} alt="sign-up figure " />
            </div>
            <div className="form-wrap">
              <form
                name="myForm"
                onSubmit={handleSubmit}
                className="log-in-form"
              >
                <div className="header">
                  <h1>Join us today!</h1>
                  <h2>Sign Up</h2>
                </div>
                <div className="form-item">
                  <div className="input-wrap">
                    <label htmlFor="name">Username</label>
                    <br />
                    <br />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      required
                      placeholder="Enter Your Name"
                      className="input-field"
                    />
                    <br />
                    <br />
                    <label htmlFor="email">Email*</label>
                    <br />
                    <br />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder="example@example.com"
                      className="input-field"
                    />
                    <br />
                    <br />
                    <label htmlFor="password">Password*</label>
                    <br /> <br />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      placeholder="Enter Your Password"
                      className="input-field"
                    />
                    <br />
                    <br />
                    <button className="sign-btn" id="sign-btn" type="submit">
                      Register
                    </button>
                  </div>
                  <p className="text">
                    Already have an account?{" "}
                    <Link to="/LoginForm">Sign in</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegistrationForm;
