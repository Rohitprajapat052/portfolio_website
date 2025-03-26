import React, { useState } from "react";
import logo from "../assets/t1.png"; // Adjust path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false); // Close menu after clicking (on mobile)
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="TAXTAG Logo"
            className="h-16 w-16 object-cover rounded-full"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-gray-900">TAXTAG</h1>
            <p className="text-xs text-gray-600">- Taxation Made Relaxation -</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Services", "Team", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(item.toLowerCase().replace(" ", ""))
              }
              className="text-lg font-semibold text-gray-900 hover:text-[#FFAC1C] transition-all relative 
                        after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-[#FFAC1C] 
                        hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {["Home", "Services", "Team", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(item.toLowerCase().replace(" ", ""))
              }
              className="text-lg font-semibold text-gray-900 hover:text-[#FFAC1C] transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
