import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
// import { EmblaCarousel } from "../Carousel/EmblaCarousel";
// import slide1 from "../../assets/image1.jpg";
// import slide2 from "../../assets/image2.jpg";
// import slide3 from "../../assets/image3.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero container">
      {/* <div className="hero-carousel">
        <EmblaCarousel images={[slide1, slide2, slide3]} />
      </div> */}

      <div className="hero-text">
        <h1>Trusted Quality, Delivered Globally</h1>
        <p>
          At Earth Life International, we specialise in providing the finest
          Himalayan salt, premium rice and corn. With a reputation for
          excellence, global reliability, and sustainable sourcing, we deliver
          unmatched quality with every order. We're ready to meet any of your
          unique needs just contact us.
        </p>
        <button
          className="btn dark-nav"
          onClick={() => navigate("/contact-us")}
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Hero;
