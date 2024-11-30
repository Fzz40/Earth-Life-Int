import React from "react";
import "./DeicingSalt.css";
import Title from "../../../Title/Title";
import deicing from "../../../../assets/DeicingSalt.jpg";
import OnDemand from "../../../OnDemand/OnDemand";
import GetAQuote from "../../../Get A Qoute/GetAQuote";

const DeicingSalt = () => {
  return (
    <>
      <Title title="Deicing Salt" />
      <div className="deicing-container">
        <img src={deicing} alt="Deicing Salt" className="deicing-image" />
        <div className="deicing-description">
          <p>
            De-icing salt, primarily contains sodium chloride (NaCl), and is
            used to melt snow and ice on roads, walkways, and other surfaces by
            lowering the freezing point of water.
          </p>
          <p>
            It mainly includes additives like anti-caking agents, calcium or
            magnesium chloride for improved performance, and abrasives like sand
            for traction.
          </p>
          <p>
            Although there are several benefits, but majorly it is used in
            enhancing safety by reducing slips and accidents, being
            cost-effective and efficient for winter maintenance, and preventing
            ice formation when applied preemptively.
          </p>
          <p>
            This essential product is widely exported to USA, Canada, Germany,
            other regions with harsh winters.
          </p>
        </div>
      </div>
      <OnDemand />
      <GetAQuote />
    </>
  );
};

export default DeicingSalt;
