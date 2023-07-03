// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage/Landing";
import LoginForm from "./Component/LoginForm";
import RegistrationForm from "./Component/RegistrationForm";
import HomePage from "./Component/main/Home";
import Footer from "./Component/LandingPage/Footer";
import ProfileSection from "./Component/main/ProfileSection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/ProfileSection" element={<ProfileSection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
