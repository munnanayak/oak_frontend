import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import PreHeader from "./components/PreHeader.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Restaurant from "./pages/Restaurant.js";
import Gallery from "./pages/Gallery.js";
import RoomDetails from "./pages/RoomDetails.js";
import Rooms from "./components/Rooms.js";
import HomeHeader from "./components/HomeHeader.js";
import Contact from "./components/Contact.js";
import CustomerDetails from "./components/CustomerDetails.js"; // Ensure this path is correct
import HomeReview from "./components/HomeReview.js";
import PaymentSuccess from "./components/PaymentSuccess.js"; // Added import

const App = () => {
  return (
    <Router>
      <ConditionalHeaders />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeheader" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customerdetails" element={<CustomerDetails />} />

        <Route path="/homereview" element={<HomeReview />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> {/* Added route */}
      </Routes>
      <ConditionalFooter />
    </Router>
  );
};

const ConditionalHeaders = () => {
  const location = useLocation();
  const isHomePath = location.pathname === "/" || location.pathname === "/homeheader";
  const isCustomerDetailsPath = location.pathname === "/customerdetails"; // Fixed spelling

  if (isCustomerDetailsPath) return null;

  return (
    <>
      <PreHeader />
      {isHomePath ? <HomeHeader /> : <Header />}
    </>
  );
};

const ConditionalFooter = () => {
  const location = useLocation();
  const isCustomerDetailsPath = location.pathname === "/customerdetails"; // Fixed spelling

  if (isCustomerDetailsPath) return null;

  return <Footer />;
};

export default App;
