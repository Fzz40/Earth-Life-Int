import React from "react";
import "./OurMission.css";
import missionImage1 from "../../../assets/mission.jpg";
import missionImage2 from "../../../assets/hand_shake.jpg";
import missionImage3 from "../../../assets/meeting.jpg";
import missionImage4 from "../../../assets/innovation.jpg";
import missionImage5 from "../../../assets/flexibility.jpg";
import Title from "../../Title/Title";

// Data for mission sections
const missionData = [
  {
    text: "At Earth Life International, our mission is to connect businesses around the globe with the world’s finest products, while fostering long-term partnerships built on trust, reliability, and excellence. We are dedicated to delivering tailored solutions that meet the unique needs of each client with unmatched precision and care.",
    image: missionImage1,
    alt: "Business team collaboration",
  },
  {
    text: "We strive to go beyond the traditional boundaries of trade by constantly evolving and innovating. Our team actively embraces new technologies and market trends to ensure that our clients not only receive the highest quality products but also benefit from the most efficient, cost-effective, and forward-thinking solutions.",
    image: missionImage2,
    alt: "Handshake representing partnership",
  },
  {
    text: "At the heart of everything we do is sustainability. We believe in responsible sourcing that preserves the environment while supporting local communities. Every step of our supply chain reflects our dedication to ethical practices, from the fields and mines where our products are harvested to sustainable packaging.",
    image: missionImage3,
    alt: "Team discussing sustainability practices",
  },
  {
    text: "Our strength lies in the relationships we build. Through our vast network of trusted partners, we offer unparalleled flexibility, allowing us to cater to both large-scale orders and customized solutions. Each partnership is a collaboration grounded in trust, mutual benefit, and long-term success.",
    image: missionImage4,
    alt: "Partnership and innovation discussion",
  },
  {
    text: "We understand that excellence is not just a standard but a mindset. Every product we deliver reflects our commitment to quality, from the careful sourcing of materials to our thorough attention to detail during production and delivery. Our clients can trust that their needs will be met with integrity, professionalism, and personalized care.",
    image: missionImage5,
    alt: "High-quality products and attention to detail",
  },
];

const OurMission = () => {
  return (
    <>
      <Title
        title="Our Mission"
        subtitle="Building Global Connections with Integrity, Innovation, and Sustainability"
      />
      <div className="mission-container">
        {missionData.map((item, index) => (
          <div
            className={`mission-item ${
              index % 2 === 0 ? "item-even" : "item-odd"
            }`}
            key={index}
          >
            <img src={item.image} alt={item.alt} className="mission-image" />
            <p className="mission-text">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurMission;
