import React from "react";
import "./Quote.css";
import mapImage from "../../assets/get-a-quote-1.png"; // Replace with your actual map image path
import { useNavigate } from "react-router-dom";
const Quote = () => {
  const navigate = useNavigate();
  return (
    <div className="quote-container">
      <div className="quote-content">
        <h2 className="quote-title">Get a Quote</h2>
        <div className="quote-underline"></div>
        <p className="quote-text">
          If you need our Product Catalog, Want Pricing, Have Questions about
          Shipping, or anything else, reach out to us. We'll respond as soon as
          we can.
        </p>
        <div className="quote-buttons">
          <button
            className="quote-button"
            onClick={() => navigate("/contact-us")}
          >
            Get a Quote
          </button>
          <button
            className="quote-button-outline"
            onClick={() => navigate("/book-a-meeting")}
          >
            Book a Meeting
          </button>
        </div>
      </div>
      <div className="quote-image">
        <img src={mapImage} alt="World Map with Regions" />
      </div>
    </div>
  );
};

export default Quote;
