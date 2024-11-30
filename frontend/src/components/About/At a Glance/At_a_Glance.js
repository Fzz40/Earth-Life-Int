import React from "react";
import "./At_a_Glance.css";
import glance from "../../../assets/glance.jpg";
import Title from "../../Title/Title";

const At_a_Glance = () => {
  return (
    <>
      <Title
        title="At a Glance"
        subtitle="Welcome to Earth Life International"
      />
      <div className="glance-at-a-glance">
        <div className="glance-content">
          <p className="glance-p">
            At Earth Life International, we are dedicated to bringing the finest
            the world has to offer to clients across the globe. Specializing in
            the trade of <strong>Himalayan salt</strong>, <strong>rice</strong>{" "}
            and <strong>Corn</strong>, we are committed to meeting your unique
            needs with unmatched precision and care. Our unwavering dedication
            to quality and reliability has earned us the trust of markets
            worldwide.
          </p>

          <p className="glance-p">
            With a global presence and a steadfast focus on sustainability, we
            operate from offices in the <strong>UK</strong>,{" "}
            <strong>USA</strong>, and <strong>Pakistan</strong>, ensuring that
            every product we deliver meets the highest international standards.
            Our extensive network of trusted partners allows us to go beyond the
            ordinary, whether you require large-scale orders of our flagship
            products or something tailored to your specific needs, we have the
            resources and expertise to fulfill your demands.
          </p>

          <p className="glance-p">
            At Earth Life International, we are committed to offering the best
            value while focusing on personalized customer care. Every
            partnership we build is founded on trust, satisfaction, and
            long-term success. For us, excellence is more than just a goal—it’s
            a promise.
          </p>
        </div>

        <div className="glance-image-container">
          <img
            src={glance}
            alt="Earth Life International"
            className="glance-side-image"
          />
        </div>
      </div>
    </>
  );
};

export default At_a_Glance;
