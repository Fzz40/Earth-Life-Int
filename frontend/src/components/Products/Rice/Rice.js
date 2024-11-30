import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Rice.css";
import Title from "../../Title/Title";
import { EmblaCarousel } from "../../Carousel/EmblaCarousel";
import BasmatiImage1 from "../../../assets/steambasmati_5.jpg";
import BasmatiImage2 from "../../../assets/steambasmati_4.jpg";
import SellaImage1 from "../../../assets/golden_sella_1.jpg";
import SellaImage2 from "../../../assets/golden_sella_2.jpg";
import Irr6Image1 from "../../../assets/irr6_1.jpg";
import Irr6Image2 from "../../../assets/irr6_2.jpg";
import Irr9Image1 from "../../../assets/irr9_1.jpg";
import Irr9Image2 from "../../../assets/irr9_2.jpg";
import GetAQuote from "../../Get A Qoute/GetAQuote";
import OnDemand from "../../OnDemand/OnDemand";

const riceData = [
  {
    id: "1121-basmati-steam-white",
    title: "1121 Basmati Steam",
    content:
      "Renowned for its aromatic fragrance and extra-long grain, 1121 Basmati Steam rice is a favorite for gourmet dishes. Its non-sticky texture and delightful flavor make it a premium choice for special occasions and everyday meals alike.",
    image: [BasmatiImage1, BasmatiImage2],
  },
  {
    id: "1121-basmati-sella",
    title: "1121 Basmati Sella",
    content:
      "1121 Sella Basmati Rice, also is a premium long-grain variety cultivated in select regions of Punjab, Pakistan, where the climate, soil, and environment are ideal for its optimal growth. Renowned for its distinct aroma, flavor, length, and fluffiness, 1121 Sella Basmati is highly sought after. It is primarily imported by countries in the Middle East, including GCC nations, as well as Europe.",
    image: [SellaImage1, SellaImage2],
  },
  {
    id: "irr9",
    title: "IRRI-9",
    content:
      "IRRI-9 is a premium non-Basmati long-grain variety, cultivated in different regions of Pakistan. It delivers superior cooking results compared to other long-grain rice varieties.",
    image: [Irr9Image1, Irr9Image2],
  },
  {
    id: "irr6",
    title: "IRRI-6",
    content:
      "IRRI-6 is a long grain rice cultivated mostly in sindh region of Pakistan. Its is a non Basmati rice with excellent cooking properties, long soft grain, and is economical. The rice is commonly supplied in bulk to markets in Africa as well as being popular in Bangladesh, Philippines and Middle East",
    image: [Irr6Image1, Irr6Image2],
  },
];

const Rice = () => {
  // Effect for adding the "visible" class to sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".rice-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  // Function to scroll to the section based on the URL hash
  const scrollToSection = (hash) => {
    const targetId = hash.replace("#", "");
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = -200; // Set your desired offset
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition + offset,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // Scroll to the section when the URL changes (hash part)
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }, [location]); // Re-run the effect whenever the location changes

  return (
    <>
      <Title
        title="Rice"
        subtitle="Delivering Premium Rice Varieties for Every Culinary Need"
      />
      <div className="rice-container">
        {riceData.map((rice, index) => (
          <div
            key={rice.id}
            id={rice.id} // Assign the id here for hash navigation
            className={`rice-section ${
              index % 2 === 0 ? "image-right" : "image-left"
            }`}
          >
            <div className="rice-embla">
              <EmblaCarousel images={rice.image} />
            </div>
            <div className="rice-content">
              <h2>{rice.title}</h2>
              <p>{rice.content}</p>
            </div>
          </div>
        ))}
      </div>
      <OnDemand />
      <GetAQuote />
    </>
  );
};

export default Rice;
