import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo/UserInfo";
import Calendar from "../components/Calendar/Calendar";
import RegionSelect from "../components/RegionSelect/RegionSelect";
import TimePicker from "../components/TimePicker/TimePicker";
import "./BookingPage.css"; // Import custom CSS
import Title from "../components/Title/Title";

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("Africa - Algiers");
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Clear existing localStorage data
    localStorage.clear();
    // Store new values
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("selectedTime", selectedTime);
    localStorage.setItem("selectedRegion", selectedRegion);
    // Navigate to confirmation page (relative path)
    navigate("/confirm");
  };

  return (
    <>
      <Title title="Book a Meeting" />
      <div className="booking-page">
        <div className="booking-card">
          <div className="booking-row">
            {/* Left Panel */}
            <div className="booking-col">
              <UserInfo />
            </div>

            {/* Center Panel - Calendar and Region */}
            <div className="booking-col">
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
              <RegionSelect
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />
            </div>

            {/* Right Panel - Time Selection */}
            <div className="booking-col">
              {/* Show TimePicker only when both selectedDate and selectedRegion are selected */}
              {selectedDate && selectedRegion && (
                <>
                  <div className="time-picker-container">
                    <TimePicker
                      selectedTime={selectedTime}
                      setSelectedTime={setSelectedTime}
                    />
                  </div>
                  <button
                    className="confirm-btn"
                    onClick={handleConfirm}
                    disabled={!selectedTime}
                  >
                    Confirm
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
