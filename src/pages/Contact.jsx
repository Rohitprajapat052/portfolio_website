import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-900 py-12">
      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">Get in Touch</h2>
        <p className="text-center text-gray-600 mt-2 text-lg">
          Have questions? Feel free to reach out to us.
        </p>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium">Name</label>
            <input
              type="text"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium">Email</label>
            <input
              type="email"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium">Message</label>
            <textarea
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="4"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
