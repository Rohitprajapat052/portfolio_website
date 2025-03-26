import React from "react";

const Services = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-100 text-gray-900 mt-[80px] md:mt-[100px] py-12">
      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">Our Services</h2>
        <p className="text-center text-gray-600 mt-2 text-lg">
          We provide expert tax consulting services tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "GST Filings", price: "₹999" },
            { title: "ITR Filings", price: "₹799" },
            { title: "Startup Registration", price: "₹1499" },
            { title: "Audit Services", price: "₹4999" },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <h4 className="text-2xl font-semibold text-gray-900">{service.title}</h4>
              <p className="mt-2 text-lg text-blue-600 font-medium">Starting at {service.price}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
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
