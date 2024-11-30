import React from "react";
import Title from "../components/Title/Title";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Title Title="About Us" />
      <Outlet />
    </div>
  );
};

export default Home;
