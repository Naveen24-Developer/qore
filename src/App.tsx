/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Custom helper wrapper to scroll viewport to top immediately on navigational change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Absolute floating interactive Threejs 3D Core background canvas */}
      <ThreeBackground />

      <div className="relative min-h-screen bg-bg-dark text-white flex flex-col justify-between selection:bg-accent-green selection:text-black z-10">
        
        {/* Floating sleek Translucent Header */}
        <Navbar />

        {/* Primary Page viewport content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Universal luxury Footer section */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
