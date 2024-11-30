import React from "react";
import Hero from "../components/Hero/Hero";
// import Title from "../components/Title/Title";
import Quote from "../components/Qoute/Quote";
const Home = () => {
  return (
    <div>
      <Hero id="hero" />
      <div className="container">
        <Quote />
      </div>
    </div>
  );
};

export default Home;
