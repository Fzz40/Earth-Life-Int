import React from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import ContactUs from "./pages/Contact";
import BookingPage from "./pages/BookingPage";
import ConfirmMeeting from "./pages/ConfirmMeeting";
import AtAGlance from "./components/About/At a Glance/At_a_Glance";
import OurMission from "./components/About/Our Mission/OurMission";
import OurValues from "./components/About/Our Values/OurValues";
import GlobalPresense from "./components/About/Global Presense/GlobalPresense";
import OurNetworkAndPartnerships from "./components/About/Our Network and Partnerships/OurNetworkAndPartnerships";
import IndustriesWeServe from "./components/About/IndustriesWeServe/IndustriesWeServe";
// import "bootstrap/dist/css/bootstrap.min.css";

// Product components
import EdibleSalt from "./components/Products/Himaliyan Salt/Edible Salt/EdibleSalt";
import AnimalLickSalt from "./components/Products/Himaliyan Salt/Animal Lick Salt/AnimalLickSalt";
import DeicingSalt from "./components/Products/Himaliyan Salt/Deicing Salt/DeicingSalt";
import Corn from "./components/Products/Corn/Corn";
import Rice from "./components/Products/Rice/Rice";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products">
            <Route path="himalayan-salt">
              <Route path="edible-salt" element={<EdibleSalt />} />
              <Route path="animal-lick-salt" element={<AnimalLickSalt />} />
              <Route path="deicing-salt" element={<DeicingSalt />} />
            </Route>
            <Route path="rice" element={<Rice />} />
            <Route path="corn" element={<Corn />} />
          </Route>
          <Route path="about-us" element={<About />}>
            <Route path="at-a-glance" element={<AtAGlance />} />
            <Route path="our-mission" element={<OurMission />} />
            <Route path="our-values" element={<OurValues />} />
            <Route path="global-presence" element={<GlobalPresense />} />
            <Route
              path="our-network-and-partnerships"
              element={<OurNetworkAndPartnerships />}
            />
            <Route path="industries-we-serve" element={<IndustriesWeServe />} />
          </Route>
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="book-a-meeting" element={<BookingPage />} />
          <Route path="confirm" element={<ConfirmMeeting />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
