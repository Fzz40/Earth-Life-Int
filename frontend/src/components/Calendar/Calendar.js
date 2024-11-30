import React from "react";
import PropTypes from "prop-types";
import "./Calendar.css"; // Import the custom CSS

function Calendar({ selectedDate, setSelectedDate }) {
  return (
    <div className="calendar-card">
      <div className="calendar-body">
        <h5 className="calendar-title">Select a Date</h5>
        <input
          type="date"
          className="calendar-input"
          value={selectedDate || ""}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </div>
  );
}

// Define PropTypes for the component
Calendar.propTypes = {
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func.isRequired,
};

export default Calendar;
