import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3i38mi",  // Your Service ID
        "template_vwd4u75", // Your Template ID
        form.current,
        "gmaD1rgPM59eikv9B" // Your User ID (Public Key)
      )
      .then(
        (response) => {
          setMessage("Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          form.current.reset();
        },
        (error) => {
          setMessage("Failed to send message. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="w-full bg-gray-100 text-gray-900 py-20">
      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#EFA139] tracking-wide">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Have questions? We’d love to hear from you.
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-md rounded-lg">
          <div className="mb-4 text-left">
            <label className="block text-lg font-medium text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EFA139] focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-lg font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EFA139] focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-lg font-medium text-gray-800">Message</label>
            <textarea
              name="message"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EFA139] focus:outline-none"
              rows="4"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#EFA139] text-white p-3 rounded-md text-lg font-medium hover:bg-[#d88f33] transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
