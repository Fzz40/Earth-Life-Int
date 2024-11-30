import React from "react";
import PropTypes from "prop-types";
import "./TimePicker.css"; // Import custom CSS file

function TimePicker({ selectedTime, setSelectedTime }) {
  const times = [
    "06:00 am",
    "06:15 am",
    "06:30 am",
    "06:45 am",
    "07:00 am",
    "07:15 am",
    "07:30 am",
    "07:45 am",
    "08:00 am",
    "08:15 am",
    "08:30 am",
    "08:45 am",
    "09:00 am",
    "09:15 am",
    "09:30 am",
    "09:45 am",
    "10:00 am",
    "10:15 am",
    "10:30 am",
    "10:45 am",
    "11:00 am",
    "11:15 am",
    "11:30 am",
    "11:45 am",
    "12:00 pm",
  ];

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="time-picker-card">
      <div className="time-picker-body">
        <h5 className="time-picker-title">Select a Time</h5>
        <div className="time-picker-list-container">
          <label className="time-picker-label">Choose a time slot:</label>
          <div className="time-picker-list">
            {times.map((time) => (
              <button
                key={time}
                className={`time-picker-list-item ${
                  selectedTime === time ? "active" : ""
                }`}
                onClick={() => handleTimeChange(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div className="time-picker-selected">
          Selected: {selectedTime || "None"}
        </div>
      </div>
    </div>
  );
}

// Define PropTypes for the component
TimePicker.propTypes = {
  selectedTime: PropTypes.string,
  setSelectedTime: PropTypes.func.isRequired,
};

export default TimePicker;
