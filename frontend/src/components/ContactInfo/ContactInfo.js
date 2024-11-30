import React from "react";
import "./ContactInfo.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import Phone_icon from "../../assets/phone-icon.png";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-container-1">
        <h3 className="contact-info-heading">
          Send us a message{" "}
          <img
            src={msg_icon}
            alt="Message Icon"
            className="contact-info-icon"
          />
        </h3>
        <p className="contact-info-description">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <li className="contact-info-list-item">
          <img
            src={mail_icon}
            alt="Mail Icon"
            className="contact-info-item-icon"
          />
          <strong>sales@earthlifeinternational.com</strong>
        </li>
        <p className="contact-info-description">
          For more infomation feel free to contact with us{" "}
        </p>
        <li className="contact-info-list-item">
          <img
            src={mail_icon}
            alt="Mail Icon"
            className="contact-info-item-icon"
          />
          <strong>info@earthlifeinternational.com</strong>
        </li>
      </div>
      <div className="contact-info-container-2">
        <div className="contact-info-box">
          <img
            src={location_icon}
            alt="Location Icon"
            className="contact-info-item-icon"
          />
          <h3>UK</h3>
          <p>
            EarthLife International Unit 2, Albion Road Industrial Estate,
            Lancashire Rochdale OL11 4JB
          </p>
          <img
            src={Phone_icon}
            alt="Phone Icon"
            className="contact-info-item-icon"
          />
          <p className="p-inline">+44 7397241264</p>
        </div>
        <div className="contact-info-box">
          <img
            src={location_icon}
            alt="Location Icon"
            className="contact-info-item-icon"
          />
          <h3>USA</h3>
          <p>
            EarthLife International LLC 30 N Gould St Ste R Sheridan, WY 82801
          </p>
          <img
            src={Phone_icon}
            alt="Phone Icon"
            className="contact-info-item-icon"
          />
          <p className="p-inline">+1 480-900-9691</p>
        </div>

        <div className="contact-info-box">
          <img
            src={location_icon}
            alt="Location Icon"
            className="contact-info-item-icon"
          />
          <h3>PAKISTAN</h3>
          <p>EarthLife International Lahore Airport road Eden avenue 69</p>
          <img
            src={Phone_icon}
            alt="Phone Icon"
            className="contact-info-item-icon"
          />
          <p className="p-inline">+92 3365553555</p>
        </div>
        <div className="contact-info-box">
          <img
            src={location_icon}
            alt="Location Icon"
            className="contact-info-item-icon"
          />
          <h3>UAE</h3>
          <h2 className="coming-soon">(Coming Soon)</h2>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
