import React from "react";
import "./OurNetworkAndPartnerships.css";
import partner_image1 from "../../../assets/quality.jpg"; // Replace with actual image source
import partner_image2 from "../../../assets/flexibility.jpg"; // Replace with actual image source
import partner_image3 from "../../../assets/sustainability.jpg"; // Replace with actual image source
import Title from "../../Title/Title";

const OurNetworkAndPartnerships = () => {
  return (
    <>
      <Title
        title="Our Network and Partnerships"
        subtitle="Building Global Connections for Quality, Sustainability, and Growth"
      />
      <div className="our-network-partnerships">
        <section className="intro">
          <p>
            At Earth Life International, we believe that strong partnerships are
            the cornerstone of delivering exceptional products and services. Our
            extensive network of trusted suppliers, industry experts, and
            logistical partners spans the globe, enabling us to source and
            deliver products that meet the highest standards of quality,
            sustainability, and reliability.
          </p>
          <p>
            Our partnerships extend well beyond our core locations. With
            connections across Asia, Europe, North America, and the Middle East,
            we have built a diverse supply chain capable of responding to the
            unique needs of each client. This global reach allows us to offer a
            wide range of products, from Himalayan salt rice, corn to gelatine
            and capsules as well as specialty botanicals and more, with the
            flexibility to adapt and customise our offerings.
          </p>
        </section>

        <section className="key-benefits">
          <h2>Key Benefits of Our Network and Partnerships:</h2>
          <div className="benefit-items">
            <div className="benefit-item">
              <img
                src={partner_image1}
                alt="Quality Assurance"
                className="benefit-image"
              />
              <h3>Quality Assurance</h3>
              <p>
                We work only with trusted partners who share our commitment to
                excellence, ensuring that every product meets strict
                international standards.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src={partner_image2}
                alt="Flexibility"
                className="benefit-image"
              />
              <h3>Flexibility</h3>
              <p>
                With a vast network, we can source rare or specialised products,
                accommodating bulk orders as well as custom requests.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src={partner_image3}
                alt="Sustainability"
                className="benefit-image"
              />
              <h3>Sustainability</h3>
              <p>
                Our network includes suppliers who prioritise environmentally
                responsible practices, supporting our mission to create a
                positive impact.
              </p>
            </div>
          </div>
        </section>

        <section className="collaboration">
          <p>
            Through close collaboration with our partners, we ensure that every
            step of the sourcing, production, and delivery process is managed
            with precision. By choosing Earth Life International, you gain
            access not only to premium products but also to a dedicated team
            committed to providing tailored solutions and a seamless, reliable
            experience.
          </p>
          <p>
            We view every partnership as a shared journey toward mutual growth
            and success.
          </p>
        </section>

        <section className="closing">
          <h2>Together, We Grow</h2>
          <p>
            Together with our partners, we are committed to bringing you the
            finest products with unmatched quality and reliability. At Earth
            Life International, we are more than a supplier, we are a dedicated
            partner in your success.
          </p>
        </section>
      </div>
    </>
  );
};

export default OurNetworkAndPartnerships;
