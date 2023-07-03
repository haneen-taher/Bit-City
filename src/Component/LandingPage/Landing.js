// LandingPage.js
import React from "react";
import HeroSection from "./HeroSection";
import ImageSlider from "./ImageSlider";
import FeaturesSection from "./FeaturesSection";
import Navbar from "./Navbar";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <ImageSlider />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;
