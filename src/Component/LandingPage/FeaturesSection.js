// FeaturesSection.js
import React from "react";
import Feature1 from "../../Assets/Feature_1.png";
import Feature2 from "../../Assets/Feature_2.png";
import Feature3 from "../../Assets/Feature_3.png";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Features</h2>
      <div className="zigzag">
        <div className="feature">
          <h3>Signal Hub</h3>
          <p>
            A place for experts to share knowledge and experiences and for new
            Bit City members to quickly get information, trading tips and rising
            trends of the cryptocurrency market to make reasonable investment
            decisions.
          </p>
          <img src={Feature1} alt="Feature1" />
        </div>
        <div className="feature">
          <h3>Market Opinions</h3>
          <p>
            A place to freely share personal opinions and make predictions about
            the cryptocurrency market. Bit City member can become a star on the
            social networks if they can attract attention from the community.
          </p>
          <img src={Feature2} alt="Feature1" />
        </div>
        <div className="feature">
          <h3>Communities</h3>
          <p>
            A bridge for Bit City member around the world to make friends,
            exchange creative ideas, together turn them into valuable products
            and contribute to the development of the cryptocurrency industry.
          </p>
          <img src={Feature3} alt="Feature1" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
