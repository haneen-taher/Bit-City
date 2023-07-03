// HeroSection.js
import React from "react";
import Hero from "../../Assets/Hero.png";
import BackImage from "../../Assets/hero-1.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="content">
        <div className="content-wrapper">
          <h1>Welcome to Bit City!</h1>
          <p>Connect, Explore, and Thrive in the world of cryptocurrency.</p>
          <button onClick={() => navigate("/RegistrationForm")}>
            Join Now
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src={Hero} alt="Hero" />
        <img src={BackImage} alt="Background" className="background-image" />
      </div>
    </section>
  );
};

export default HeroSection;
