import React from "react";
import Title from "../../Title/Title";
import valuesImage from "../../../assets/values.jpg";
import "./OurValues.css";
import Testimonials from "../../Testimonials/Testimonials";

const OurValues = () => {
  return (
    <>
      <Title
        title="Our Values"
        subtitle="Welcome to Earth Life International"
      />
      <div className="values-content-container">
        <div className="values-text">
          <p>
            At <strong>Earth Life International</strong>, our values are the
            foundation of everything we do. They guide our daily operations,
            decision-making processes, and interactions with clients, partners,
            and communities. These principles ensure that we deliver not only
            exceptional products but also a <em>seamless</em>, <em>ethical</em>,
            and <em>positive</em> experience for everyone we work with.
          </p>
        </div>
        <div className="values-image">
          <img src={valuesImage} alt="Our Values" />
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default OurValues;
