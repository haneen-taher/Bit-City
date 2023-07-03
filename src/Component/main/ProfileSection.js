import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import { faker } from "@faker-js/faker";

const ProfileSection = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/users/${sessionStorage.getItem("id")}`
        );
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="bbb">
          <Link to="/Home">
            <button>Feed</button>
          </Link>

          <Link to="/">
            <button>Log out</button>
          </Link>
        </div>
      </header>

      <div className="profile-section">
        <h2>Nice to see you again!</h2>
        <div className="user-card">
          <div className="user-info">
            <h3>
              <i className="fa-regular fa-user"></i> {user.name}
            </h3>
            <p>
              <i className="fa-regular fa-envelope"> </i> Email: {user.email}
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>
              Location:{faker.location.city()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
