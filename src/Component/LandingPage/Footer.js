// Footer.js
import React from "react";
import Logo from "../../Assets/Logo.svg";
const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="content">
          <img src={Logo} alt="Logo" className="logo-1" />
          <p className="paragraph">Connect with fellow crypto enthusiasts</p>
          <p className="paragraph">
            and stay updated on the latest news in the world of
            cryptocurrencies.
          </p>
          <div class="social-icons">
            <a href="#" class="icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
