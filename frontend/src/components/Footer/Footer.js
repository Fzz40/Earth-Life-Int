import React from "react";
import "./Footer.css";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Earth Life Internationals</h2>
          <p>
            Earth Life International supplies premium Himalayan salt, rice, and
            corn, emphasizing quality and sustainability. With locations in the
            UK, USA, UAE and Pakistan, we deliver tailored solutions backed by
            reliability and innovation.
          </p>
        </div>
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about-us/at-a-glance">About us</Link>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email: <br /> info@earthlifeinternational.com <br />
            sales@earthlifeinternational.com
          </p>
          <p>UK: +44 7397241264</p>
          <p>USA: +1 480-900-9691</p>
          <p>PAKISTAN: +92 3365553555</p>
          {/* <div className="social-links">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <pre>
          <p>&copy; 2024 EarthLifeInternational. All rights reserved.</p>
        </pre>
      </div>
    </footer>
  );
};

export default Footer;
