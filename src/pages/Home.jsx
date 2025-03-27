import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/bg1.jpg";

const Home = () => {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 w-full max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
          Simplifying Taxes for You
        </h1>
        <p className="mt-4 text-lg text-gray-200 leading-relaxed">
          Expert tax consulting for businesses and individuals. We ensure a
          seamless and stress-free tax experience.
        </p>
        <Link to="/contact">
          <button className="mt-6 px-8 py-3 bg-[#EFA139] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#d98f2c] transform hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
