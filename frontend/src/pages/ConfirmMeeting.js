import { useState, useEffect } from "react";
import React from "react";
import MeetingDetailsCard from "../components/MeetingDetailsCard/MeetingDetailsCard";
import UserInformationForm from "../components/UserInformationForm/UserInformationForm";
import "./ConfirmMeeting.css"; // Import custom CSS
import Title from "../components/Title/Title";
const ConfirmMeeting = () => {
  const [meetingDetails, setMeetingDetails] = useState({
    selectedRegion: "",
    selectedTime: "",
    selectedDate: "",
  });

  useEffect(() => {
    const storedRegion = localStorage.getItem("selectedRegion");
    const storedTime = localStorage.getItem("selectedTime");
    const storedDate = localStorage.getItem("selectedDate");

    setMeetingDetails({
      selectedRegion: storedRegion || "",
      selectedTime: storedTime || "",
      selectedDate: storedDate || "",
    });
  }, []);

  return (
    <>
      <Title title="Book a Meeting" />
      <div className="meeting-details-container">
        {/* Left side: Meeting Details */}
        <MeetingDetailsCard meetingDetails={meetingDetails} />

        {/* Right side: User Information Form */}
        <UserInformationForm meetingDetails={meetingDetails} />
      </div>
    </>
  );
};

export default ConfirmMeeting;
