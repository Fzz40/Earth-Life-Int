import React from "react";
import "./AnimalLickSalt.css";
import ProductGrid from "../../../ProductGrid/ProductGrid";
import ls330a from "../../../../assets/LS-330-A.png";
import ls330b from "../../../../assets/LS-330-B.png";
import ls330c from "../../../../assets/LS-330-C.png";
import ls330e from "../../../../assets/LS-330-E.png";
import ls340 from "../../../../assets/LS-340.png";
import ls350 from "../../../../assets/compressed_salt.png";
import Title from "../../../Title/Title";
import GetAQuote from "../../../Get A Qoute/GetAQuote";
import OnDemand from "../../../OnDemand/OnDemand";
const products = [
  {
    image: ls330a,
    title: "Natural Block",
    size: "Weight (kg): 1 - 1.5",
  },
  {
    image: ls330b,
    title: "Natural Block",
    size: "Weight (kg): 2 - 3",
  },
  {
    image: ls330c,
    title: "Natural Block",
    size: "Weight (kg): 3 - 4",
  },
  {
    image: ls330e,
    title: "Natural Block",
    size: "Weight (kg): 5 - 6",
  },
  {
    image: ls340,
    title: "Rock Salt Lumps",
    size: "Weight (kg): 2 - 10",
  },
  {
    image: ls350,
    title: "Compressed Salt",
    size: "Size (kg): Avaible in sizes between 1-10",
  },
];

const AnimalLickSalt = () => {
  return (
    <div>
      <Title
        title="Animal Lick Salt"
        subtitle="Premium quality salts for every kitchen."
      />
      <ProductGrid products={products} />
      <OnDemand />
      <GetAQuote />
    </div>
  );
};

export default AnimalLickSalt;
