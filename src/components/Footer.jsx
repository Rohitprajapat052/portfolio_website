import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "../assets/t1.png"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-[#EFA139] text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Information */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="TAXTAG Logo" className="h-20 w-20 rounded-full mb-3 object-contain" />
          <h3 className="text-2xl font-semibold">TAXTAG</h3>
          <p className="text-white mt-2 max-w-xs">
            Providing top-notch tax services with professionalism and care.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-2" />
              <span className="max-w-xs text-center md:text-left">
                10, Rajapark, near Roshan Restaurant, Gurunanakpura, Tilak Nagar, Jaipur, Rajasthan 302004
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:08233798276" className="hover:underline">+91 82337 98276</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" />
              <a href="mailto:taxtagservices@gmail.com" className="hover:underline">
                taxtagservices@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://wa.me/918233798276" target="_blank" rel="noopener noreferrer" className="hover:bg-opacity-90">
              <FaWhatsapp size={32} className="rounded-full bg-white p-1 text-green-500" />
            </a>
            <a href="https://instagram.com/taxtag" target="_blank" rel="noopener noreferrer" className="hover:bg-opacity-90">
              <FaInstagram size={32} className="rounded-full bg-white p-1 text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-white text-sm mt-8">
        &copy; {new Date().getFullYear()} TAXTAG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
