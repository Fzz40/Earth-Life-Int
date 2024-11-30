import React from "react";
import "./GetAQuote.css";
import map from "../../assets/get-a-quote-1.png";
import { useNavigate } from "react-router-dom";
const GetAQuote = () => {
  const navigate = useNavigate();
  return (
    <div className="quote-container">
      <div className="quote-content">
        <h2 className="quote-title">Get A Quote</h2>
        <div className="quote-underline"></div>
        <p className="quote-text">
          If you need our Product Catalog, Want Pricing, Have Questions about
          Shipping, or anything else, reach out to us. We’ll respond as soon as
          we can.
        </p>
        <button
          className="quote-button"
          onClick={() => navigate("/contact-us")}
        >
          GET A QUOTE
        </button>
      </div>
      <div className="quote-image">
        <img src={map} alt="World Map" />
      </div>
    </div>
  );
};

export default GetAQuote;
