import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-text">
          <h6 className="about-vision">A Vision Beyond Profit</h6>
          <h2 className="about-title">
            How It Established A Legacy Since 1983
          </h2>
          <p className="about-paragraph">
            With a passion for sharing the blessings of nature with people
            around the world, Ittefaq Trading Co. DBA Ittefaq Salt was
            established in 1983. As a wholesale supplier, Ittefaq Salt strives
            to bring the purity and goodness of Himalayan pink rock salt to the
            world.
          </p>
          <p className="about-paragraph">
            Over the years, our commitment to maintaining high-quality standards
            and a secure supply chain allowed us to win the trust of domestic
            and overseas partners, and new heights for our business.
          </p>
          <p className="about-paragraph">
            Our team of 300+ trained professionals works tirelessly to ensure
            the finest quality products throughout the process from mining to
            manufacturing and supply while remaining in compliance with
            international standards.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src="https://i.ibb.co/vQbkKj7/about.jpg"
            alt="Company Area"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
