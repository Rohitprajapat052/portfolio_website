import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing Google Maps icon

const Footer = () => {
  return (
    <footer className="bg-[#FFAC1C] text-white text-center p-6 mt-6">
      {/* Footer Heading */}
      <h3 className="text-xl font-semibold mb-2">TAXTAG</h3>

      {/* Dummy Address with Google Maps Icon */}
      <div className="flex items-center justify-center space-x-2 text-lg">
        <FaMapMarkerAlt size={20} />
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          123, Tax Street, Financial City, Country - 123456
        </a>
      </div>

      {/* Copyright Section */}
      <p className="mt-2">&copy; 2025 TAXTAG. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
