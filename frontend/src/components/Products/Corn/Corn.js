import React from "react";
import "./Corn.css";
import Title from "../../Title/Title";
import { EmblaCarousel } from "../../Carousel/EmblaCarousel";
import corn1 from "../../../assets/corn_1.jpg";
import corn2 from "../../../assets/corn_2.jpg";
import corn3 from "../../../assets/Corn_3.jpg";
import GetAQuote from "../../Get A Qoute/GetAQuote";
const Corn = () => {
  const images = [corn1, corn2, corn3];

  return (
    <>
      <Title title="Premium Quality Corn" />
      <div className="corn-container">
        <div className="corn-carousel">
          <EmblaCarousel images={images} />
        </div>
        <div className="corn-description">
          <p>
            EARTH LIFE INTERNATIONAL supplies high-quality yellow and white
            corn, a versatile agricultural product utilized across various
            industries. Our corn is carefully cultivated to ensure consistent
            quality and optimal nutritional value, making it a trusted choice
            for a range of applications.
          </p>
          <p>
            Corn plays a crucial role in animal nutrition, serving as a rich
            source of energy and essential nutrients for livestock, poultry, and
            other animals. It supports healthy growth, weight gain, and overall
            well-being. Beyond animal feed, our corn is widely used in food
            manufacturing, where it is processed into products such as cornmeal,
            flour, and snacks, offering natural sweetness and texture for a
            variety of culinary uses.
          </p>
          <p>
            Additionally, corn is a key ingredient in the production of ethanol,
            contributing to the biofuel industry’s shift toward renewable
            energy. Its high starch content also makes it valuable in industrial
            applications, including the production of biodegradable plastics,
            starches, and food additives.
          </p>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default Corn;
