import React from "react";
import PropTypes from "prop-types";
import { Clock, Laptop, Map } from "react-bootstrap-icons";
import "./MeetingDetailsCard.css"; // Import custom CSS file

const MeetingDetailsCard = ({ meetingDetails }) => {
  return (
    <div
      className="meeting-card"
      onMouseOver={(e) => {
        e.currentTarget.classList.add("hover");
      }}
      onMouseOut={(e) => {
        e.currentTarget.classList.remove("hover");
      }}
    >
      <div className="meeting-card-body">
        <h3 className="meeting-card-title">
          <Clock size={24} /> Book a Meeting
        </h3>

        <div className="meeting-alert">
          <strong>
            <Clock size={18} /> 30 mins
          </strong>
          <br />
          <strong>
            <Laptop size={18} /> Web conference
          </strong>{" "}
          - The meeting link will be emailed upon confirmation.
        </div>

        <div className="meeting-details">
          <h5 className="meeting-details-title">
            <Map size={20} className="mb-1" /> Meeting Details:
          </h5>
          <p className="meeting-details-text">
            <strong>Time:</strong> {meetingDetails.selectedTime}
            <br />
            <strong>Date:</strong>{" "}
            {new Date(meetingDetails.selectedDate).toDateString()}
            <br />
            <strong>Region:</strong> {meetingDetails.selectedRegion}
          </p>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
MeetingDetailsCard.propTypes = {
  meetingDetails: PropTypes.shape({
    selectedTime: PropTypes.string.isRequired,
    selectedDate: PropTypes.string.isRequired,
    selectedRegion: PropTypes.string.isRequired,
  }).isRequired,
};

export default MeetingDetailsCard;
