import React, { useRef, useState, useEffect } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import qualityImage from "../../assets/quality.jpg";
import innovationImage from "../../assets/innovation.jpg";
import customerCareImage from "../../assets/customer-care.jpg";
import integrityImage from "../../assets/integrity.jpg";
import sustainabilityImage from "../../assets/sustainability.jpg";
import collaborationImage from "../../assets/values.jpg";
import socialResponsibilityImage from "../../assets/social-responsibility.jpg";
import excellenceImage from "../../assets/excellence.jpg";

const valuesData = [
  {
    title: "Quality",
    description:
      "Quality is at the heart of our operations. We carefully source our products from trusted suppliers, ensuring that each item meets rigorous global standards. From premium Himalayan salt to high-quality gelatine, we prioritise purity and performance at every stage of production. Our focus on quality guarantees that our clients receive only the finest products, carefully inspected and prepared to deliver maximum value.",
    image: qualityImage,
  },
  {
    title: "Innovation",
    description:
      "In a rapidly changing world, innovation is essential. We continuously seek out new technologies and ideas that enable us to deliver better, more efficient solutions. Whether it's optimising supply chains, improving product quality, or enhancing our customer service experience, we embrace forward-thinking strategies that keep us ahead of the curve. By staying adaptable and agile, we ensure that our clients benefit from the latest advancements in global trade.",
    image: innovationImage,
  },
  {
    title: "Customer Care",
    description:
      "Our clients are at the centre of everything we do. We go beyond just delivering products; we take the time to understand each client's unique needs and provide personalised solutions that drive their success. By building long-term relationships rooted in trust and transparency, we ensure that every customer receives the care, attention, and support they deserve. Our goal is not just customer satisfaction; it’s customer loyalty.",
    image: customerCareImage,
  },
  {
    title: "Integrity",
    description:
      "Integrity is the cornerstone of our business. We believe in transparency, honesty, and accountability in every interaction. Our ethical approach ensures that we remain a trusted partner, always acting with the highest levels of professionalism. Whether we’re working with suppliers, clients, or team members, we are committed to doing the right thing and fostering a culture of fairness and respect.",
    image: integrityImage,
  },
  {
    title: "Sustainability",
    description:
      "We are deeply committed to sustainability, recognising that the future of our planet depends on responsible practices today. Our ethical sourcing ensures that we protect the environment while supporting local communities and economies. From sustainable farming techniques to eco-friendly packaging, we make every effort to reduce our environmental footprint. Sustainability isn’t just a value; it’s an obligation to future generations.",
    image: sustainabilityImage,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of partnership. Collaboration with our clients, suppliers, and stakeholders is key to creating solutions that are both practical and innovative. We value the exchange of ideas and believe that by working together, we can achieve more. Every partnership is treated as a joint effort, ensuring mutual success and shared goals.",
    image: collaborationImage,
  },
  {
    title: "Social Responsibility",
    description:
      "We recognise our role in contributing to the well-being of the communities where we operate. We actively engage in initiatives that support local economies and provide fair opportunities for workers. Beyond our supply chain, we are dedicated to creating positive social impacts, whether through fair labour practices, charitable efforts, or community partnerships.",
    image: socialResponsibilityImage,
  },
  {
    title: "Excellence",
    description:
      "Excellence is more than a goal; it’s a mindset that permeates every aspect of our business. From product development to customer service, we are constantly striving for perfection. We challenge ourselves to exceed expectations and continually improve, ensuring that every interaction with Earth Life International reflects our firm commitment to being the best in the industry.",
    image: excellenceImage,
  },
];

const Testimonials = () => {
  const slider = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 630);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 630);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let tx = 0;

  const getMaxTxValue = () => {
    if (window.innerWidth <= 840) {
      return -87.5; // Smaller screens
    }
    return -75; // Larger screens
  };

  const slideForward = () => {
    const maxTx = getMaxTxValue();
    if (tx > maxTx) {
      tx -= 12.5;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 12.5;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      {isSmallScreen ? (
        <div className="small-screen-container">
          {valuesData.map((value, index) => (
            <div key={index} className="small-screen-slide">
              <h2 className="small-screen-heading">{value.title}</h2>
              <img
                src={value.image}
                alt={value.title}
                className="small-screen-image"
              />
              <p className="small-screen-text">{value.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <img
            src={next_icon}
            alt="Next"
            className="next-btn"
            onClick={slideForward}
          />
          <img
            src={back_icon}
            alt="Back"
            className="back-btn"
            onClick={slideBackward}
          />
          <div className="slider">
            <ul ref={slider}>
              {valuesData.map((value, index) => (
                <li key={index}>
                  <div className="slide">
                    <div className="user-info">
                      <img src={value.image} alt={value.title} />
                      <div className="heading">
                        <h2>{value.title}</h2>
                      </div>
                    </div>
                    <p>{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;
