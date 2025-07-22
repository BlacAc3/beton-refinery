import React from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import About from "./pages/About.jsx";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Service from "./pages/Service.jsx";
import Partnership from "./pages/Partnership.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Service />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
