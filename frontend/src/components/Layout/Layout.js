import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <div>
      <Navbar
        onOpenChange={(isOpen) => console.log("Mobile menu is", isOpen)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
