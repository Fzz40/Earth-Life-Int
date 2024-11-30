import React from "react";
import "./EdibleSalt.css";
import ProductGrid from "../../../ProductGrid/ProductGrid";
import runningSaltLightPink from "../../../../assets/running-salt-light-pink.png";
import runningSaltMediumPink from "../../../../assets/running-salt-medium-pink.png";
import runningSaltDarkPink from "../../../../assets/running-salt-dark-pink.png";
import crystalSaltLightPink from "../../../../assets/crystal-salt-light-pink.png";
import crystalSaltMediumPink from "../../../../assets/crystal-salt-medium-pink.png";
import crystalSaltDarkPink from "../../../../assets/crystal-salt-dark-pink.png";
import Title from "../../../Title/Title";
import GetAQuote from "../../../Get A Qoute/GetAQuote";
import OnDemand from "../../../OnDemand/OnDemand";

const products = [
  {
    image: crystalSaltLightPink,
    title: "Crystal Salt Granules (Light Pink)",
    size: "Size (mm): 2 - 5",
    code: "ES-930-A",
  },
  {
    image: crystalSaltMediumPink,
    title: "Crystal Salt Granules (Medium Pink)",
    size: "Size (mm): 2 - 5",
    code: "ES-930-B",
  },
  {
    image: crystalSaltDarkPink,
    title: "Crystal Salt Granules (Dark Pink)",
    size: "Size (mm): 2 - 5",
    code: "ES-930-C",
  },
  {
    image: runningSaltLightPink,
    title: "Running Salt (Light Pink)",
    size: "Weight (Mesh): 20 - 50",
    code: "ES-975-A",
  },
  {
    image: runningSaltMediumPink,
    title: "Running Salt (Medium Pink)",
    size: "Weight (Mesh): 20 - 50",
    code: "ES-975-B",
  },
  {
    image: runningSaltDarkPink,
    title: "Running Salt (Dark Pink)",
    size: "Weight (Mesh): 20 - 50",
    code: "ES-975-C",
  },
];
const EdibleSalt = () => {
  return (
    <div>
      <Title
        title="Edible Salt"
        subtitle="Premium quality salts for every kitchen."
      />
      <ProductGrid products={products} />
      <OnDemand />
      <GetAQuote />
    </div>
  );
};

export default EdibleSalt;
