import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-900 py-16">
      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#FFAC1C] tracking-wide">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Have questions? We’d love to hear from you.
        </p>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-md rounded-lg">
          <div className="mb-4 text-left">
            <label className="block text-lg font-medium text-gray-800">Name</label>
            <input
              type="text"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFAC1C] focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-lg font-medium text-gray-800">Email</label>
            <input
              type="email"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFAC1C] focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-lg font-medium text-gray-800">Message</label>
            <textarea
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFAC1C] focus:outline-none"
              rows="4"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFAC1C] text-white p-3 rounded-md text-lg font-medium hover:bg-[#e69a18] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
