// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
// import other pages as we build them

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other pages later */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
