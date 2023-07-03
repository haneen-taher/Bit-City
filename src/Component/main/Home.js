import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import PostCommentSection from "./PostCommentSection";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";

const HomePage = () => {
  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="bbb">
          <Link to="/ProfileSection">
            <button>Profile</button>
          </Link>
          <Link to="/">
            <button>Log out</button>
          </Link>
        </div>
      </header>

      <div className="main-container">
        <div className="right-section">
          <PostCommentSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
