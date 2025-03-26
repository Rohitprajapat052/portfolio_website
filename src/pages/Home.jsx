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
      <section className="relative px-6 py-20 w-full max-w-2xl">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
          Simplifying Taxes for You
        </h2>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Expert tax consulting for businesses and individuals. Our goal is to provide a seamless and stress-free tax experience.
        </p>
        <Link to="/contact">
          <button className="mt-6 px-8 py-3 bg-[#FFAC1C] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#e69a19] transform hover:scale-105 transition-all">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
