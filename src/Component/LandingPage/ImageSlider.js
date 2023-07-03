// ImageSlider.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Connect from "../../Assets/bitcizy-z_illustration_city 1.svg";
import share from "../../Assets/share.svg";
import develop from "../../Assets/develop.svg";

const ImageSlider = () => {
  return (
    <section className="image-slider">
      <h2>Our Mission</h2>
      <Carousel>
        <div>
          <img src={Connect} alt="Connecting" />
          <p className="legend">Connecting</p>
        </div>
        <div>
          <img src={share} alt="Sharing" />
          <p className="legend">Sharing</p>
        </div>
        <div>
          <img src={develop} alt="Developing" />
          <p className="legend">Developing</p>
        </div>
      </Carousel>
    </section>
  );
};

export default ImageSlider;
