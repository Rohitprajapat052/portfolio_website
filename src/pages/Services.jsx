import React from "react";

const Services = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-900 py-16">
      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-[#FFAC1C] tracking-wide">
          Our <span className="text-[#FFAC1C]">Services</span>
        </h2>
        <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          We offer expert tax consulting solutions designed to meet your financial needs.
        </p>

        {/* Decorative Divider */}
        <div className="w-20 h-1 bg-[#FFAC1C] mx-auto mt-4 mb-8"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6">
          {[
            { title: "GST Filings", price: "₹999" },
            { title: "ITR Filings", price: "₹799" },
            { title: "Startup Registration", price: "₹1499" },
            { title: "Audit Services", price: "₹4999" },
            { title: "Tax Planning", price: "₹1999" },
            { title: "Business Compliance", price: "₹2999" },
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <h4 className="text-2xl font-semibold text-black">{service.title}</h4>
              <p className="mt-3 text-lg text-[#FFAC1C] font-medium">
                Starting at {service.price}
              </p>
              <button className="mt-6 px-6 py-3 bg-[#FFAC1C] text-white rounded-lg hover:bg-[#e69a18] transition-all shadow-md">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
