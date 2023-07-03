// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="bbb">
          <Link to="/LoginForm">
            <button> Log in </button>
          </Link>
          <Link to="/RegistrationForm">
            <button> Sign up </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
