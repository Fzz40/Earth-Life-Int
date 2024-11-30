import React from "react";
import "./UserInfo.css"; // Import custom CSS file
import user from "../../assets/user.png";
function UserInfo() {
  return (
    <div className="user-info-card">
      <img src={user} alt="Profile Placeholder" className="user-info-img" />
      <div className="user-info-body">
        <h2 className="user-info-title">SALES REPRESENTATIVE</h2>
        <button className="book-meeting-btn">Book a Meeting (30 mins)</button>
        <p className="user-info-description">
          Web conference - The meeting link will be emailed upon confirmation.
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
