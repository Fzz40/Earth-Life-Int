import React, { useEffect } from "react";
import "./IndustriesWeServe.css";
import foodImage from "../../../assets/food_beverage.jpg";
import agricultureImage from "../../../assets/agriculture.jpg";
import industrialImage from "../../../assets/industrial.jpg";
import healthImage from "../../../assets/health_wellness.jpg";
import Title from "../../Title/Title";

const industriesData = [
  {
    title: "Food & Beverage",
    content:
      "Our premium Himalayan salt, rice varieties and corn  are sourced and processed to meet the high standards of the food and beverage industry. We work with manufacturers and distributors who seek natural, high-quality ingredients that enhance flavour, texture, and nutritional value.",
    image: foodImage,
  },
  {
    title: "Health & Wellness",
    content:
      "We embrace the natural benefits of Himalayan salt to enhance health and wellness. Rich in essential minerals, our ethically sourced salt supports respiratory therapy, skincare solutions, and overall well-being. Whether it's used in salt lamps for air purification, bath salts for relaxation, as tiles in saunas or as a dietary supplement, our products are designed to promote a balanced and healthy lifestyle.",
    image: healthImage,
  },
  {
    title: "Agriculture & Animal Care",
    content:
      "Our salt blocks, corn for animal feed and natural additives are widely used in agriculture and animal care, supporting livestock health with essential minerals and nutrients. We supply agricultural clients with reliable, high-quality products that contribute to the well-being of their animals and enhance productivity.",
    image: agricultureImage,
  },
  {
    title: "Industrial & De-icing Solutions",
    content:
      "We provide industrial-grade Himalayan salt for de-icing and other industrial applications. Our clients in this sector rely on us for large-scale, efficient solutions to keep operations running smoothly, especially during harsh winter conditions.",
    image: industrialImage,
  },
];

const IndustriesWeServe = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".industry-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to check if any sections are already in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Title
        title="Industries We Serve"
        subtitle="Empowering Industries with Quality, Sustainability, and Precision"
      />
      <div className="industries-container">
        <p>
          At Earth Life International, our diverse product range meets the
          unique demands of various industries across the globe. From food
          production to health and wellness, our commitment to quality,
          sustainability, and reliability ensures that we deliver products
          tailored to each sector's specific requirements. Here are some of the
          key industries we proudly serve:
        </p>
        {industriesData.map((industry, index) => (
          <div
            key={index}
            className={`industry-section ${
              index % 2 === 0 ? "image-right" : "image-left"
            }`}
          >
            <img
              src={industry.image}
              alt={industry.title}
              className="industry-image"
            />
            <div className="industry-content">
              <h2>{industry.title}</h2>
              <p>{industry.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndustriesWeServe;
