import React from "react";
import { FaUserTie, FaLock, FaClock, FaSync } from "react-icons/fa"; // Importing icons

const features = [
  {
    icon: <FaUserTie size={40} className="text-[#EFA139]" />,
    title: "Expert Assistance",
    description:
      "Get guidance from experienced professionals to ensure accurate and hassle-free tax filing.",
  },
  {
    icon: <FaLock size={40} className="text-[#EFA139]" />,
    title: "Secure and Private",
    description:
      "Your personal and financial data is protected with top-tier security measures.",
  },
  {
    icon: <FaClock size={40} className="text-[#EFA139]" />,
    title: "Timely Filing",
    description:
      "Never miss a deadline with our proactive reminders and efficient processing.",
  },
  {
    icon: <FaSync size={40} className="text-[#EFA139]" />,
    title: "Seamless Integration",
    description:
      "Easily connect with various platforms to simplify your tax filing process.",
  },
];

const Security = () => {
  return (
    <div className="w-full px-6 py-20 bg-gray-100 text-gray-900 shadow-lg rounded-xl">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-[#EFA139] mb-4">
        TaxTag : Your Partner for E-Tax Filing
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-700 text-center mb-10">
        TaxTag your ideal partner for assisted Tax E-Filing as we offer
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow"
          >
            {/* Icon */}
            {feature.icon}

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Security;
