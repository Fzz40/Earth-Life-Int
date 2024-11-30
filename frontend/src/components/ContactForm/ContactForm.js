import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import OptionList from "./OptionList";
import "./ContactForm.css";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const productOptions = [
    "Edible Salt",
    "Corn",
    "Dei icing Salt",
    "Rice",
    "Animal Lick Salt",
    "Private Labeling",
    "Others",
  ];

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Channel Islands",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "DR Congo",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Faeroe Islands",
    "Finland",
    "France",
    "French Guiana",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Réunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "State of Palestine",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "The Bahamas",
    "Timor-Leste",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const businessTypes = [
    "Importer",
    "Distributor",
    "Brand",
    "Wholesale",
    "Other",
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.products = formData.getAll("products");

    try {
      const response = await axios.post(
        "http://localhost:3001/contact",
        formObject,
        {
          headers: {
            "Content-Type": "application/json", // Ensure the content type is JSON
          },
        }
      );

      if (response.status === 200) {
        // On success, show success message and reset the form
        setResult("Form Submitted Successfully!");
        alert("Your message has been sent successfully!");
        event.target.reset(); // Reset the form fields
      } else {
        // On failure, show failure message
        setResult("Failed to submit form. Please try again.");
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form.");
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={onSubmit}>
        {/* Name and Email */}
        <div className="form-row">
          <div className="form-col">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="contact-form-input"
              required
            />
          </div>
          <div className="form-col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="contact-form-input"
              required
            />
          </div>
        </div>

        {/* Phone and Country */}
        <div className="form-row">
          <div className="form-col">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="contact-form-input"
              required
            />
          </div>
          <div className="form-col">
            <label>Country</label>
            <div className="contact-form-select-container">
              <select name="country" className="contact-form-input" required>
                <OptionList options={countries} />
              </select>
            </div>
          </div>
        </div>
        {/* Product Options */}
        <div className="form-group">
          <label>Select Products</label>
          <div className="checkbox-group">
            {productOptions.map((product, index) => (
              <label key={index} className="checkbox-item">
                <input type="checkbox" name="products" value={product} />{" "}
                {product}
              </label>
            ))}
          </div>
        </div>
        {/* Business and Subject */}
        <div className="form-row">
          <div className="form-col">
            <label>Business</label>
            <div className="contact-form-select-container">
              <select name="business" className="contact-form-input" required>
                <OptionList options={businessTypes} />
              </select>
            </div>
          </div>
          <div className="form-col">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              className="contact-form-input"
            />
          </div>
        </div>

        {/* Message */}
        <div className="form-row">
          <div className="form-col">
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              className="contact-form-input"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <p className="form-result">{result}</p>
      </form>
    </div>
  );
};

export default ContactForm;
