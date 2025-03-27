import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarqueeText from "./components/MarqueeText";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col bg-white text-gray-900 relative min-h-screen">

        {/* Auto-Scrolling Marquee Text Section */}
        <div className="w-full fixed top-0 left-0 z-20 bg-[#EFA139] text-white py-2">
          <MarqueeText />
        </div>

        {/* Header Section (Directly Below Marquee) */}
        <div className="w-full fixed top-[40px] left-0 z-10 bg-white shadow-md">
          <Header />
        </div>

        {/* Main Content Section (Adjusted to Avoid Overlap) */}
        <div className="flex-grow w-full mt-[150px]">
          <main className="w-full">
            <section id="home" className="flex items-center justify-center w-full">
              <Home />
            </section>
            <section id="services" className="flex items-center justify-center w-full px-8 py-12">
              <Services />
            </section>
            <section id="team" className="flex items-center justify-center w-full px-8 py-12">
              <Team />
            </section>
            {/* Security Section (After Team) */}
            <section id="security" className="flex items-center justify-center w-full px-8 py-12">
              <Security />
            </section>
            <section id="contact" className="flex items-center justify-center w-full px-8 py-12">
              <Contact />
            </section>
          </main>
        </div>

        {/* Footer Section */}
        <div className="w-full">
          <Footer />
        </div>

      </div>
    </Router>
  );
};

export default App;
