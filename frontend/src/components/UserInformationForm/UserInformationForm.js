import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { Person, Envelope, ChatLeftText } from "react-bootstrap-icons"; // Import Bootstrap icons
import "./UserInformationForm.css"; // Import the custom CSS file
import axios from "axios";

const UserInformationForm = ({ meetingDetails }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email) {
      setFormError("Please fill in all required fields");
      return;
    }

    const payload = { fullName, email, message, meetingDetails };

    try {
      await axios.post("http://localhost:3001/schedule", payload);
      alert(
        "Meeting scheduled successfully. Check your email for confirmation."
      );
    } catch (error) {
      console.error("Error scheduling meeting:", error);
      alert("Failed to schedule meeting. Please try again.");
    }
  };

  return (
    <div className="user-info-form">
      <div className="user-info-card-2">
        <h4 className="form-title">Fill Out Your Information</h4>

        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>
              Full Name <span className="required">*</span>
            </label>
            <div className="input-group">
              <div className="input-icon">
                <Person />
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="input-field"
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              Email Address <span className="required">*</span>
            </label>
            <div className="input-group">
              <div className="input-icon">
                <Envelope />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="input-field"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Share any details:</label>
            <div className="input-group">
              <div className="input-icon">
                <ChatLeftText />
              </div>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Provide any additional information"
                className="input-field"
              />
            </div>
          </div>

          {formError && <div className="form-error">{formError}</div>}

          <div className="form-submit">
            <button type="submit" className="submit-btn">
              Schedule My Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UserInformationForm.propTypes = {
  meetingDetails: PropTypes.shape({
    selectedTime: PropTypes.string.isRequired,
    selectedDate: PropTypes.string.isRequired,
    selectedRegion: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInformationForm;
