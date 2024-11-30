import React from "react";
import "./GlobalPresense.css";
import uk_image from "../../../assets/uk_image.jpg";
import us_image from "../../../assets/us_image.jpg";
import pakistan_image from "../../../assets/pakistan_image.jpg";
import uae_image from "../../../assets/uae_image.jpg";
import Title from "../../Title/Title";

const GlobalPresense = () => {
  return (
    <>
      <Title
        title="Global Presence"
        subtitle="Connecting Markets, Bridging Borders: A Worldwide Network of Expertise and Localized Solutions"
      />
      <div className="global-presence">
        <div className="global-presense-intro">
          <p>
            At Earth Life International, our reach spans continents, allowing us
            to effectively serve clients around the world. With established
            offices in the UK, USA, and Pakistan, and with an upcoming expansion
            to the UAE, alongside a vast network of trusted partners across the
            globe, we are strategically positioned to meet the demands of
            diverse markets with localized support and a global perspective.
          </p>
        </div>
        <div className="location">
          <img src={uk_image} alt="United Kingdom" className="location-image" />
          <div className="location-content">
            <h2>
              <strong>United Kingdom</strong>
            </h2>
            <p>
              Our <strong>UK office</strong> serves as our primary hub for
              European markets, giving us direct access to some of the world’s
              largest and most quality-conscious buyers. The UK’s strategic
              location allows us to streamline distribution across Europe,
              ensuring fast, efficient deliveries and excellent logistical
              management. With a team focused on European standards and
              preferences, we bring localized expertise and in-depth market
              insights to our clients, helping them navigate a competitive
              landscape with ease and confidence.
            </p>
          </div>
        </div>
        <div className="location">
          <img src={us_image} alt="United States" className="location-image" />
          <div className="location-content">
            <h2>
              <strong>United States</strong>
            </h2>
            <p>
              Our <strong>USA office</strong> strengthens our North American
              presence and allows us to serve clients across the United States,
              Canada, and beyond. Positioned to manage the distinct demands of
              the American market, our USA team is skilled in delivering
              tailored solutions that align with industry regulations, consumer
              preferences, and evolving trends. The USA office also serves as a
              central point for collaboration with local partners, enhancing our
              flexibility and responsiveness in meeting client needs.
            </p>
          </div>
        </div>
        <div className="location">
          <img src={pakistan_image} alt="Pakistan" className="location-image" />
          <div className="location-content">
            <h2>
              <strong>Pakistan</strong>
            </h2>
            <p>
              Located at the heart of our sourcing regions, our{" "}
              <strong>Pakistan office</strong> gives us direct access to Asia’s
              growing markets, including critical trade routes into China. This
              strategic location allows us to cultivate close relationships with
              suppliers, oversee quality control at every stage, and ensure
              ethical, sustainable sourcing. Through our presence in Pakistan,
              we effectively connect the best products from Asia to clients
              worldwide.
            </p>
          </div>
        </div>
        <div className="location">
          <img
            src={uae_image}
            alt="United Arab Emirates"
            className="location-image"
          />
          <div className="location-content">
            <h2>
              <strong>United Arab Emirates (Coming Soon)</strong>
            </h2>
            <p>
              With plans already in action to expand into the{" "}
              <strong>UAE</strong> , Earth Life International will soon enhance
              its presence in the Middle East. This new location will allow us
              to strengthen connections in one of the world’s key trade hubs,
              facilitating greater accessibility to clients and expanding our
              reach to new markets. Through our offices and our global network
              of partners, Earth Life International combines local insights with
              international expertise to provide a level of service that goes
              beyond standard supply. Wherever you are, we’re here to support
              your business with products and services you can rely on.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalPresense;
