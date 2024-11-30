import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import BookMeeting from "../components/BookMeeting/BookMeeting";
import "./Contact.css";
import Title from "../components/Title/Title";

const Contact = () => {
  return (
    <>
      <Title title="Contact us" subtitle="Get in Touch" />
      <div className="contact" id="contact">
        <ContactInfo />
        <ContactForm />
      </div>
      <BookMeeting />
    </>
  );
};

export default Contact;
