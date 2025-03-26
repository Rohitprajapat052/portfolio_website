import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col bg-white text-gray-900 relative min-h-screen">

        {/* Header Section */}
        <div className="w-full fixed top-0 left-0 z-10 bg-white shadow-md">
          <Header />
        </div>

        {/* Main Content Section */}
        <div className="flex-grow w-full mt-[80px]">
          <main className="w-full">
            <section id="home" className="flex items-center justify-center w-full ">
              <Home />
            </section>
            <section id="services" className="flex items-center justify-center w-full px-8 py-12">
              <Services />
            </section>
            <section id="team" className="flex items-center justify-center w-full px-8 py-12">
              <Team />
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
