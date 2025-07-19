import React from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import About from "./pages/About.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
