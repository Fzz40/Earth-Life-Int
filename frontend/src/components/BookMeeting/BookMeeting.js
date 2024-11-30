import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../../assets/calendar-illustration.png";
import "./BookMeeting.css";

const BookMeeting = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/book-a-meeting");
  };

  return (
    <div className="book-meeting-container">
      <div className="text-content">
        <h2 className="book-meeting-title">Book a Meeting</h2>
        <div className="separator">
          <span className="separator-dots">• • •</span>
          <span className="separator-line"></span>
        </div>
        <p className="book-meeting-description">
          If you would like to book a meeting with less hassle and get the
          answers to all your queries, just click on the button below to
          schedule a meeting. We look forward to speaking with you.
        </p>
        <button onClick={handleBookingClick} className="book-meeting-btn">
          Book a Meeting
        </button>
      </div>
      <div className="image-content">
        <img
          src={Calendar}
          alt="Calendar Illustration"
          className="calendar-image"
        />
      </div>
    </div>
  );
};

export default BookMeeting;
